const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');    // Get access to the User model
const jwt = require('jsonwebtoken');    // Make use of JSON web tokens for authentication

// Create an Express router
const router = express.Router();

// Create Routes
router.post('/signup', async (req, res) => {
    //console.log(req.body);
    const { email, password} = req.body // Deconstruct the email and password send by the request
    // Use Try catch when working with databases
    try {
        const newUser = new User({email, password});   // Use the email and password to create a new User
        // Save the user to the database
        await newUser.save();    // This is asynchronous! must use async (in the function) and await
        
        const token = jwt.sign({ userId: newUser._id }, 'SECRET_KEY'); // Secret key is hardcoded for now
        res.send({ token });
    }
    catch (err){
        return res.status(422).send(err.message);
    }    
});

router.post('/signin', async (req, res) => {
    // Get the email and password from the request body
    const { email, password } = req.body;

    // Check if an email and password was provided
    if (!email || !password) {
        return res.status(422).send({ error: 'Must provide an email and password' });
    }

    // Await a response from the database, ensure that the function now uses async
    const user = await User.findOne({ email });

    // Check for no user found
    if (!user) {
        return res.status(404).send({ error: 'Invalid password or email' });
    }

    try {
    await user.comparePassword(password);
        const token = jwt.sign({ userId: user._id }, 'SECRET_KEY');
        res.send({ token });
    }
    catch (err) {
        return res.status(422).send({ error: 'Invalid password or email' });
    }
});

// Export our router
module.exports = router;