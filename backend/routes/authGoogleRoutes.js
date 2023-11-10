const express = require('express');
const dotenv = require('dotenv');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');
require('dotenv').config();

const router = express.Router();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Verificar si el usuario ya existe en la base de datos
      let user = await User.findOne({ googleId: profile.id });

      if (!user) {
        // Si no existe, crea un nuevo usuario en la base de datos
        user = new User({ googleId: profile.id });
        await user.save();
      }

      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  }
));

// Ruta de inicio de sesión con Google
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Ruta de retorno de Google después de la autenticación
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Redirige a la página principal después de la autenticación
    res.redirect('/');
  }
);

module.exports = router;
