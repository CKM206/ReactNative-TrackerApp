const mongoose = require('mongoose');

// Setup a User Model to match the objects within the mongoDB Users Collection
const userSchema = new mongoose.Schema({
    // Attributes of a user
    email: {
        type: String,
        unique: [true, "This email is already in use!"],
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

// Associate the User Model with Mongoose
// Model name is 'User', associated with the userSchema
mongoose.model('User', userSchema)