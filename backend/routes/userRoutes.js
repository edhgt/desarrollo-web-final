const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Ruta para crear un nuevo usuario
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Crear un nuevo usuario
    const newUser = new User({
      username,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(10), null),
    });

    await newUser.save();
    return res.json({ message: 'Usuario creado con éxito' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al crear el usuario' });
  }
});

module.exports = router;
