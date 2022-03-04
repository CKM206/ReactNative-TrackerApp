const express = require('express');

const app = express();

// Handles Home Request
app.get('/', (req, res) => {
    res.send('Hi there!');
});

// Listen on Port 3000, log success
app.listen(3000, () => {
    console.log('Listening on port 3000');
});