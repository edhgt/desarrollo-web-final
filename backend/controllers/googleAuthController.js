// controllers/googleAuthController.js
const passport = require("passport");
const User = require("../models/User");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const loginWithGoogle = passport.authenticate("google", {
  scope: ["profile", "email"],
});

const loginWithGoogleCallback = async (req, res, next) => {
  passport.authenticate("google", async (err, user, info) => {
    // Autenticación exitosa

    // Genera un token JWT con la información del usuario
    const token = jwt.sign({ userId: user._id, displayName: user.displayName }, process.env.SESSION_SECRET);

    // Almacena el token en las cookies y devuelve la respuesta
    res.cookie('token', token, { httpOnly: false });
    res.redirect('http://localhost:5173/home');
    //res.json({ success: true, token });
  })(req, res, next);
};

module.exports = { loginWithGoogle, loginWithGoogleCallback };
