const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const {
    signUpErrors,
    loginErrors
} = require('../utils/errors.utils');

const maxAge = 1 * 24 * 60 * 60 * 1000; // maxAge limits the time the token is valid
const createToken = (id) => {
    return jwt.sign({
        id
    }, process.env.JWT_KEY, {
        expiresIn: maxAge
    });
}

exports.signUp = async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        password,
        birthday,
        job
    } = req.body;
    await UserModel.create({
            firstName,
            lastName,
            email,
            password,
            birthday,
            job
        })
        .then(user => {
            res.status(200).json({
                user: user._id + " - successfully created"
            });
        }).catch(err => {
            const errors = signUpErrors(err);
            res.status(400).send({
                errors
            })
        });
}

exports.logIn = async (req, res, next) => {
    const {
        email,
        password
    } = req.body;
    try {
        const user = await UserModel.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: maxAge
        });
        res.status(200).json({
            user: user._id + " - successfully logged in"
        });
    }catch (err) {
        const errors = loginErrors(err);
        res.status(400).json({
            errors
        })
    }
};

exports.logOut = async (req, res) => {
    res.clearCookie('jwt');
    res.status(200).json({
        message: "successfully logged out"
    });
};