const passport = require('passport');
const dotenv = require('dotenv');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./models/User'); // Asegúrate de tener el modelo de usuario configurado

dotenv.config();

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
},
async (accessToken, refreshToken, profile, done) => {
  try {
    // Buscar el usuario en la base de datos por su ID de Google
    let user = await User.findOne({ googleId: profile.id });

    if (user) {
      // Si el usuario ya existe, lo devolvemos
      return done(null, user);
    } else {
      // Si el usuario no existe, lo creamos
      user = await User.create({
        googleId: profile.id,
        username: profile.displayName,
        // Otros campos según tu modelo de usuario
      });

      return done(null, user);
    }
  } catch (error) {
    return done(error, null);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

module.exports = passport;
