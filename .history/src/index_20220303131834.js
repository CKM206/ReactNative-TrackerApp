require('./models/User')    // Require the User Model so that it executes once and we can use in other files
                            // Doesnt need to be assigned to a variable or exported (from User.js)
require('./models/Track')   // Require the Track Model so that it executes once and we can use in other files
                            // Doesnt need to be assigned to a variable or exported (from Track.js)

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');      // Import our Auth Routes
const trackRoutes = require('./routes/trackRoutes');    // Import our Track Routes
const bodyParser = require('body-parser');          // Helps Express handle JSON
const requireAuth = require('./middlewares/requireAuth');    // Import our authentication middleware


const app = express();

app.use(bodyParser.json())  // THIS MUST BE ABOVE ROUTES : bodyParser needs to parse JSON 
                            //-information our of the request, before passing to authRoutes

app.use(authRoutes);    // Allow the app to use authRoutes
app.use(trackRoutes);

// Connect to MongoDB
const mongoURI = 'mongodb+srv://mayc:L1S3X7@cluster0.kx0h9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoURI);
// Make sure we successfully connect
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});
// Display connection errors
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err);
});

// Handles Home Request
app.get('/', requireAuth, (req, res) => {   // Use our authentication Middleware here!
    res.send(`Your email: ${req.user.email}`);
});

// Listen on Port 3000, log success
app.listen(3000, () => {
    console.log('Listening on port 3000');
});