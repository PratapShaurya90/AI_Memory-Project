const jwt = require('jsonwebtoken');

const generateTokens = (res, userId) => {
    // 1. Generate Access Token (Short-lived)
    const accessToken = jwt.sign({ id: userId }, process.env.JWT_SECRET || 'supersecretkey', {
        expiresIn: '15m'
    });

    // 2. Generate Refresh Token (Long-lived)
    const refreshToken = jwt.sign({ id: userId }, process.env.JWT_REFRESH_SECRET || 'superrefreshkey', {
        expiresIn: '7d'
    });

    // 3. Set Access Token in HTTP-Only Cookie
    res.cookie('jwt', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 15 * 60 * 1000 // 15 minutes
    });

    // 4. Set Refresh Token in HTTP-Only Cookie
    res.cookie('jwt_refresh', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    return { accessToken, refreshToken };
};

module.exports = generateTokens;
