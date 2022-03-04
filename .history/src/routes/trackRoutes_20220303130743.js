const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');    // Get access to the User model

const router = mongoose.Router();
