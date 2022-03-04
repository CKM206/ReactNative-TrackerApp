const express = require('express');

const app = express();

const mongoURI = 'mongodb+srv://mayc:L1S3X7@cluster0.t9vhj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// Handles Home Request
app.get('/', (req, res) => {
    res.send('Hi there!');
});

// Listen on Port 3000, log success
app.listen(3000, () => {
    console.log('Listening on port 3000');
});