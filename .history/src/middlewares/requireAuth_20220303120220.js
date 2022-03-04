const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');


module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    // authorization === 'bearer *Token String'
    // Check invalid Request
    if (!authorization) {
        return res.status(401).send({ error: 'You must be logged in.'});
    }

    // Otherwise the token is valid, so lets extract it
    const token = authorization.replace('Bearer ', '');

    // Validate the token, using the secret key (Hardcoded in authRoutes)
    // an async callback is used to errors and success, errors produce err, success produce payload (User info within the token)
    jwt.verify(token, 'SECRET_KEY', async (err, payload) => {

    });
};