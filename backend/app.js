const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('./passport'); // Asegúrate de que la ruta sea correcta
const authGoogleRoutes = require('./routes/authGoogleRoutes');
const authPasswordRoutes = require('./routes/authPasswordRoutes');
const userRoutes = require('./routes/userRoutes');
const photoRoutes = require('./routes/photoRoutes');
const commentRoutes = require('./routes/commentRoutes');
const likeRoutes = require('./routes/likeRoutes');
require('dotenv').config();

const app = express();
// Configuración de sesión
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
app.use(
  cors({
    origin: ["http://localhost:30011"],
    methods: "GET,POST,PUT,DELETE,OPTIONS",
  })
);
app.use(express.json());

const PORT = process.env.PORT || 3001;
const MONGO_HOST = process.env.MONGO_HOST || 'localhost';

mongoose.connect(`mongodb://${MONGO_HOST}:27017/red_social`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Conexión a MongoDB establecida correctamente');
})
.catch(err => {
  console.error('Error al conectar a MongoDB:', err);
});

// Configuración de sesión
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));

// Configuración de passport
app.use(passport.initialize());
app.use(passport.session());

// Middleware para verificar la autenticación
const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ error: 'No autenticado' });
};

// Rutas de autenticación con Google
app.use('/auth/google', authGoogleRoutes);

// Rutas de autenticación con contraseña
app.use('/auth/password', authPasswordRoutes);

// Rutas de usuario
app.use('/api/user', userRoutes);
app.use('/api/photos', ensureAuthenticated, photoRoutes); // Se aplica el middleware a las rutas de fotos
app.use('/api/comments', ensureAuthenticated, commentRoutes); // Se aplica el middleware a las rutas de comentarios
app.use('/api/likes', ensureAuthenticated, likeRoutes); // Se aplica el middleware a las rutas de likes

app.listen(PORT, () => {
  console.log(`Servidor Express en http://localhost:${PORT}`);
});
