const UserModel = require('../models/user.model');
const ObjectId = require('mongoose').Types.ObjectId;


exports.getAllUsers = async (req, res, next) => {
    await UserModel.find().select('-password') // Find all users and exclude the password field
        .then(users => {
            res.status(200).json(users)
        }) // Send a response with a status code 200 (OK)
        .catch(error => {
            res.status(400).json({
                error
            })
        }) // Send a response with a status code 400 (Bad Request)
};

exports.userInfo = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('Invalid id : ' + req.params.id);
    }
    await UserModel.findById(req.params.id, '-password')
        .then(user => {
            if (!user) {
                return res.status(404).send('User not found : ' + req.params.id);
            }
            res.status(200).json(user);
        })
        .catch(error => {
            res.status(400).json({
                error
            })
        });
}


exports.updateUser = async (req, res) => {
    const body = req.body;
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('Invalid id : ' + req.params.id);
    }
    await UserModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        .then(user => {
            if (!user) {
                return res.status(404).send('User not found : ' + req.params.id);
            }
            res.status(200).json({
                message: "successfully update "
            });
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({
                error
            })

        });
}

exports.deleteUser = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('Invalid id : ' + req.params.id);
    }
    await UserModel.findByIdAndDelete(req.params.id)
        .then(user => {
            if (!user) {
                return res.status(404).send('User not found : ' + req.params.id);
            }
            res.status(200).json({
                message: "successfully deleted "
            });
        })
        .catch(error => {
            res.status(400).json({
                error
            })
        });
}