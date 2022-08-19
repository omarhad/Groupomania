const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');

// Auth routes
router.post('/register', authController.signUp);
router.post('/login', authController.logIn);
router.get('/logout', authController.logOut);

// User routes
router.get('/', userController.getAllUsers);
router.get('/:id', userController.userInfo);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;