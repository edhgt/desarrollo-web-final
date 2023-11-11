// config/session.js
const session = require('express-session');
const passport = require('./passport'); // Importa la configuración de Passport
require('dotenv').config();

const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
};

const initialize = () => {
  return [
    session(sessionConfig),
    passport.initialize(),
    passport.session()
  ];
};

module.exports = initialize;
