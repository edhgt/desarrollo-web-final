// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const passwordAuthController = require('../controllers/passwordAuthController');
const googleAuthController = require('../controllers/googleAuthController');

// Rutas de inicio de sesión con contraseña
router.post('/login', passwordAuthController.loginWithPassword);
router.get('/logout', passwordAuthController.logout);

// Rutas de inicio de sesión con Google
router.get('/google', googleAuthController.loginWithGoogle);
router.get('/google/callback', googleAuthController.loginWithGoogleCallback);

module.exports = router;
