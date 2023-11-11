const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

// Ruta para crear un nuevo usuario
router.post('/register', userController.createUser);
router.get('/:id', userController.getUserById);

module.exports = router;
