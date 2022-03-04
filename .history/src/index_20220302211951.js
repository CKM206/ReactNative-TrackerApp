const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
const mongoURI = 'mongodb+srv://mayc:L1S3X7@cluster0.t9vhj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoURI);
// Make sure we successfully connect
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});


// Handles Home Request
app.get('/', (req, res) => {
    res.send('Hi there!');
});

// Listen on Port 3000, log success
app.listen(3000, () => {
    console.log('Listening on port 3000');
});