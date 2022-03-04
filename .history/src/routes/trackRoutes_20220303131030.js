const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');    // Get access to the User model
const requireAuth = require('../middlewares/requireAuth');    // Import our authentication middleware
const Track = mongoose.model('Track');

// Create the router
const router = mongoose.Router();
