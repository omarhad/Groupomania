const UserModel = require('../models/user.model');
const PostModel = require('../models/post.model');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports.uploadProfil = (req, res) => {
    const updatedRecord = {
        image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    };
    UserModel.updateOne({
        _id: req.body.id
    }, {
        $set: updatedRecord
    }, (err) => {
        if (!err) {
            res.status(200).json({
                message: 'Image uploaded successfully'
            });
        } else {
            res.status(400).json({
                message: 'Error uploading image'
            });
        }
    })
}

module.exports.uploadPost = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('Invalid id : ' + req.params.id);
    }
    const updatedRecord = {
        pic: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    };
    const post = await PostModel.findById(req.params.id);
    if (!post) {
        return res.status(404).send('Post not found');
    }
    const user = await UserModel.findById(req.body.id);
    if (!user) {
        return res.status(404).send('User not found');
    }
    if (post.posterId == user._id) {
        post.picture.push(updatedRecord);
        post.save();
        return res.status(200).send(post);
    }else {
        return res.status(400).send('You are not the poster of this post');
    }
}

module.exports.deleteUploadPost = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('Invalid id : ' + req.params.id);
    }
    const post = await PostModel.findById(req.params.id);
    if (!post) {
        return res.status(404).send('Post not found');
    }
    const user = await UserModel.findById(req.body.id);
    if (!user) {
        return res.status(404).send('User not found');
    }
    const pictureId = req.body.pictureId;
    const pictures = post.picture.find(photo => photo._id == pictureId);
    if (!pictures) {
        return res.status(404).send('Picture not found');
    }
    if (pictures && post.posterId == user._id) {
        post.picture.splice(post.picture.indexOf(pictures), 1);
        post.save();
        return res.status(200).send(post);
    }else {
        return res.status(400).send('You are not the poster of this post');
    }
};