const jwt = require('jsonwebtoken');
const User = require('../auth/auth.model');

const protect = async (req, res, next) => {
    let token;

    // Check if token exists in cookies
    if (req.cookies && req.cookies.jwt) {
        try {
            token = req.cookies.jwt;
            
            // Verify access token
            const decoded = jwt.verify(token, process.env.JWT_SECRET || 'supersecretkey');
            
            // Get user from the token, exclude password
            req.user = await User.findById(decoded.id).select('-password');
            
            next();
        } catch (error) {
            console.error(error);
            res.status(401);
            next(new Error('Not authorized, token failed or expired'));
        }
    } else {
        res.status(401);
        next(new Error('Not authorized, no access token found'));
    }
};

module.exports = { protect };
