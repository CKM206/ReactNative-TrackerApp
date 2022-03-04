const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');    // Get access to the User model

// Create an Express router
const router = express.Router();

// Create Routes
router.post('/signup', (req, res) => {
    console.log(req.body);
    res.send('You made a post request');
});

// Export our router
module.exports = router;