const PostModel = require('../models/post.model');
const UserModel = require('../models/user.model');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports.readPost = (req, res) => {
    PostModel.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error in Retriving Posts :' + JSON.stringify(err, undefined, 2));
        }
    }).sort({
        createdAt: -1
    });
};

// POST : Create a new post
module.exports.createPost = async (req, res) => {
    const newPost = new PostModel({
        posterId: req.body.posterId,
        message: req.body.message,
        video: req.body.video,
        likers: [],
        comments: []
    });

    try {
        const post = await newPost.save();
        return res.status(201).json(post);
    } catch (err) {
        return res.status(400).send(err);
    }
};

// PUT : Update a post
module.exports.updatePost = (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('Invalid id : ' + req.params.id);
    }
    const updatedRecord = {
        message: req.body.message,
    };
    PostModel.findByIdAndUpdate(
        req.params.id, {
            $set: updatedRecord
        }, {
            new: true
        },
        (err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                console.log('Error in Post Update :' + JSON.stringify(err, undefined, 2));
            }
        }
    );
};

// DELETE : Delete a post
module.exports.deletePost = (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('Invalid id : ' + req.params.id);
    }

    PostModel.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error in Post Delete :' + JSON.stringify(err, undefined, 2));
        }
    })
};

// PATCH : Like a post
module.exports.likePost = async (req, res) => {
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
    if (post.likers.includes(user.id)) {
        return res.status(400).send('User already liked this post');
    } else {
        post.likers.push(user.id);
        post.save();
        user.likes.push(post.id);
        user.save();
        return res.status(200).send(post);
    }
};

// PATCH : Unlike a post
module.exports.unlikePost = async (req, res) => {
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
    if (post.likers.includes(user.id)) {
        post.likers.splice(post.likers.indexOf(user.id), 1);
        post.save();
        user.likes.splice(user.likes.indexOf(post.id), 1);
        user.save();
        return res.status(200).send(post);
    } else {
        return res.status(400).send('User has not liked this post');
    }
};

// PATCH : Comment on a post
module.exports.commentPost = async (req, res) => {
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
    const comment = {
        commenterId: user.id,
        commenterName: user.lastName,
        text: req.body.text,
        timestamp: new Date().getTime()
    };
    post.comments.push(comment);
    post.save();
    return res.status(200).send(post);
};

// PATCH : Edit a comment on a post
module.exports.editCommentPost = async (req, res) => {
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
    const comment = post.comments.find(comment => comment.commenterId === user.id);
    if (!comment) {
        return res.status(404).send('Comment not found');
    }
    comment.text = req.body.text;
    comment.timestamp = new Date().getTime();
    post.save();
    return res.status(200).send(post);
};

// DELETE : Delete a comment on a post
module.exports.deleteCommentPost = async (req, res) => {
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
    const comment = post.comments.find(comment => comment.commenterId === user.id);
    if (!comment) {
        return res.status(404).send('Comment not found');
    }
    post.comments.splice(post.comments.indexOf(comment), 1);
    post.save();
    return res.status(200).send(post);
};