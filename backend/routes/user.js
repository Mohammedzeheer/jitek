const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const urlController = require('../controllers/urlController');
const jwt=require('../middleware/jwt')

router.post('/register', userController.userSignup);
router.post('/login',userController.userLogin)
router.get('/profile',jwt,userController.profile)
router.post('/reset-password',userController.resetPassword)

router.post('/shorten',urlController.shorten)
router.get('/shortCode',urlController.shortCode)
// router.get('/:shortCode',urlController.shortcode)

module.exports = router;