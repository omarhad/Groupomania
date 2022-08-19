const express = require('express'); // Express : framework web
const bodyParser = require('body-parser'); // Body-parser : parse le contenu de la requête HTTP
const cookieParser = require('cookie-parser'); // Cookie-parser : parse les cookies
const dotenv = require("dotenv"); // Dotenv : gestionnaire de variables d'environnement
const mongoose = require('mongoose'); // MongoDB : gestionnaire de base de données


const app = express(); // Create an instance of express
const userRoutes = require('./routes/user.routes'); // Import routes
const {checkUser, requireAth} = require('./middleware/auth.middleware'); // Import middleware


dotenv.config({
    path: './config/.env'
}); // Load the .env file

// Connect to MongoDB
mongoose.connect(`${process.env.MONGODB_SRV}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// Parse JSON body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

// Parse cookies
app.use(cookieParser());

// Allow CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// jwt
app.use('*', checkUser);
app.use('/jwtid', requireAth, (req, res) => {
    res.status(200).send(res.locals.user._id);
});

// Use routes
app.use('/api/user', userRoutes); // Use the user routes

module.exports = app; // Export the app