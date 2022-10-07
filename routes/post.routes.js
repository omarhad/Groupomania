const router = require('express').Router();
const postController = require('../controllers/post.controller');
const uploadController = require('../controllers/upload.controller');
const multer = require('../middleware/multer-config'); // Import the multer middleware


// Routes for post
router.get('/', postController.readPost);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
router.patch('/like-post/:id', postController.likePost);
router.patch('/unlike-post/:id', postController.unlikePost);

// Routes for comment

router.patch('/comment-post/:id', postController.commentPost);
router.patch('/edit-comment-post/:id', postController.editCommentPost);
router.delete('/delete-comment-post/:id', postController.deleteCommentPost);

// Routes for upload
router.post('/upload/:id', multer, uploadController.uploadPost);
router.delete('/delete-upload/:id', multer, uploadController.deleteUploadPost);

module.exports = router;