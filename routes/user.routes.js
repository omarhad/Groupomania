const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
const uploadController = require('../controllers/upload.controller');
const multer = require('../middleware/multer-config'); // Import the multer middleware


// Auth routes
router.post('/register', authController.signUp);
router.post('/login', authController.logIn);
router.get('/logout', authController.logOut);

// User routes
router.get('/', userController.getAllUsers);
router.get('/:id', userController.userInfo);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

// Upload routes
router.post('/upload', multer, uploadController.uploadProfil);


module.exports = router;