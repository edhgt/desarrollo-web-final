const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const initializeSession = require('./config/session');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const photoRoutes = require('./routes/photoRoutes');
const commentRoutes = require('./routes/commentRoutes');
const likeRoutes = require('./routes/likeRoutes');
require('dotenv').config();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: "GET,POST,PUT,DELETE,OPTIONS",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de sesión y Passport
app.use(initializeSession());

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

// Middleware para verificar la autenticación
const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log(user); // Asegúrate de que req.user esté definido
    return next();
  }
  res.status(401).json({ error: 'Unauthorized' });
};

// Rutas de autenticación
app.use('/api/auth', authRoutes);

// Rutas de usuario
app.use('/api/user', userRoutes);
app.use('/api/photos', photoRoutes); // Se aplica el middleware a las rutas de fotos
app.use('/api/comments', ensureAuthenticated, commentRoutes); // Se aplica el middleware a las rutas de comentarios
app.use('/api/likes', ensureAuthenticated, likeRoutes); // Se aplica el middleware a las rutas de likes

app.listen(PORT, () => {
  console.log(`Servidor Express en http://localhost:${PORT}`);
});
