const express = require('express');
const dotenv = require('dotenv');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
require('dotenv').config();

const router = express.Router();

passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      // Verificar si el usuario existe en la base de datos
      const user = await User.findOne({ username });

      if (!user || !user.validPassword(password)) {
        return done(null, false, { message: 'Credenciales inválidas' });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

// Ruta de inicio de sesión con contraseña
router.post('/login',
  passport.authenticate('local'),
  (req, res) => {
    // Redirige o responde según el resultado de la autenticación
    res.json({ message: 'Inicio de sesión exitoso', user: req.user });
  }
);

// Ruta para cerrar sesión
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
