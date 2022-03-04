const mongoose = require('mongoose');

// Setup a User Model to match the objects within the mongoDB Users Collection
const userSchema = new mongoose.Schema({

    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});