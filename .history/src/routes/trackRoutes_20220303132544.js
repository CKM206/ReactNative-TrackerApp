const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');    // Get access to the User model
const requireAuth = require('../middlewares/requireAuth');    // Import our authentication middleware
const { route } = require('./authRoutes');
const Track = mongoose.model('Track');

// Create the router
const router = express.Router();

// All routes will need authentication through our Authentication middleware
router.use(requireAuth);

// Handle get requests to /tracks : Allows users to fetch all of THEIR OWN tracks
//-Because we're requesting info from a database it will be async
router.get('/tracks', async (req, res) => {
    // Get the user that we stored on the request during authentication
    const user = req.user;

    // Query for all tracks associated with the userID
    const tracks = await Track.find({ userId: user._id });

    // Send the tracks back in the response
    res.send(tracks);
});

module.exports = router;