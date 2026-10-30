const User = require('../models/auth.model');
const bcrypt = require('bcrypt');
const generateTokens = require('../services/generateToken');
const sendEmail = require('../../../utils/sendEmail');

const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400);
            throw new Error('Please provide name, email, and password');
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            res.status(409);
            throw new Error('This email is already registered.');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({ name, email, password: hashedPassword });

        if (user) {
            res.status(201).json({
                message: 'Account created successfully!'
            });
        } else {
            res.status(400);
            throw new Error('Invalid user data');
        }
    } catch (error) {
        next(error);
    }
};

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400);
            throw new Error('Please provide email and password');
        }

        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            generateTokens(res, user._id);
            
            res.status(200).json({
                message: 'Welcome back!'
            });
        } else {
            res.status(401);
            throw new Error('Invalid email or password.');
        }
    } catch (error) {
        next(error);
    }
};

const logoutUser = (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.cookie('jwt_refresh', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.status(200).json({ message: 'Logged out successfully' });
};

const forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            res.status(404);
            throw new Error('No account found with that email.');
        }

        const resetCode = Math.floor(100000 + Math.random() * 900000).toString();

        user.resetPasswordToken = resetCode;
        user.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
        await user.save();

        const message = `Your password reset code is: <strong>${resetCode}</strong>. It expires in 10 minutes.`;

        try {
            await sendEmail({
                email: user.email,
                subject: 'Password Reset Code',
                message: message
            });

            res.status(200).json({ message: 'Verification code sent to email.' });
        } catch (err) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;
            await user.save();
            
            res.status(500);
            throw new Error('Email could not be sent. Please try again.');
        }
    } catch (error) {
        next(error);
    }
};

const resetPassword = async (req, res, next) => {
    try {
        const { email, code, newPassword } = req.body;

        if (!email || !code || !newPassword) {
            res.status(400);
            throw new Error('Please provide email, verification code, and new password.');
        }

        const user = await User.findOne({
            email: email.toLowerCase(),
            resetPasswordToken: code,
            resetPasswordExpire: { $gt: Date.now() }
        });

        if (!user) {
            res.status(400);
            throw new Error('Invalid or expired verification code.');
        }

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);
        
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save();

        res.status(200).json({ message: 'Password updated successfully! You can now log in.' });
    } catch (error) {
        next(error);
    }
};

module.exports = { registerUser, loginUser, logoutUser, forgotPassword, resetPassword };
