const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');    // Get access to the User model

// Create an Express router
const router = express.Router();

// Create Routes
router.post('/signup', async (req, res) => {
    //console.log(req.body);
    const { email, password} = req.body // Deconstruct the email and password send by the request
    
    const newUser = new User({email, password});   // Use the email and password to create a new User
    // Save the user to the database
    await user.save();    // This is asynchronous! must use async (in the function) and await

    res.send('You made a post request');
});

// Export our router
module.exports = router;