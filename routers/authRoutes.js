const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Registration Route
router.post('/register', authController.register);

// Login Route
router.post('/login', authController.login);

// Forgot Password Route
router.post('/forgot-password', authController.forgotPassword);

module.exports = router;
