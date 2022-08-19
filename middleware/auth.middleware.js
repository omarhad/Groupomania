const jwt = require('jsonwebtoken'); // Json Web Token : token de sécurité
const UserModel = require('../models/user.model'); // User : modèle de données

exports.checkUser = (req, res, next) => {
    const token = req.cookies.jwt; // Get the token from the cookies
    if (token) { // If the token is not found
        jwt.verify(token, process.env.JWT_KEY, async (error, decodedTokenr) => { // Verify the token
            if (error) {
                res.locals.user = null; // If the token is not valid, set the user to null
                res.cookies('jwt', '', {maxAge: 1}); // Delete the token from the cookies
                next(); // Call the next middleware
            }else {
                let user = await UserModel.findById(decodedTokenr.id); // Get the user from the database
                res.locals.user = user; // Set the user to the response locals
                next(); // Call the next middleware
            }
        });
    }
    else {
        res.locals.user = null; // If the token is not found, set the user to null
        next(); // Call the next middleware
    };
};

exports.requireAth = (req, res, next) => {
    const token = req.cookies.jwt; // Get the token from the cookies
    if (token) { // If the token is not found
        jwt.verify(token, process.env.JWT_KEY, async (error, decodedToken) => { // Verify the token
            if (error) {
                res.status(401).json({ error }); // If the token is not valid, send a 401 response
            }else{
                console.log(decodedToken.id);
                next(); // Call the next middleware
            }
        });
    }else{
        res.status(401).json({ error: 'Unauthorized' }); // If the token is not found, send a 401 response
    }
}

