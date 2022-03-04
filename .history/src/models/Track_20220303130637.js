const mongoose = require('mongoose');


// Setup a Point Model to match the objects within the mongoDB Users Collection
const pointSchema = new mongoose.Schema({
    // Attributes of a user
    timestamp: Number,
    coords: {
        latitude: Number,
        longitude: Number,
        altitude: Number,
        accuracy: Number,
        speed: Number
    }
    
});



// Setup a Track Model to match the objects within the mongoDB Users Collection
const trackSchema = new mongoose.Schema({
    // Attributes of a user
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Related to an object within the database
        ref: 'User',                          // For Mongoose: Relates to an instance User Model
        
    },
    name: {
        type: String,
        default: ''
    },
    locations: [pointSchema]
});

// Load into Mongoose
mongoose.model('Track', trackSchema);
// We do not need to tie pointSchema to mongoose, because they are embedded in trackSchema