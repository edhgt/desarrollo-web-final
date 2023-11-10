const Like = require('../models/Like');

// Obtener todos los likes
exports.getAllLikes = async (req, res) => {
  try {
    const likes = await Like.find();
    res.status(200).json(likes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener likes' });
  }
};

// Obtener un like por su ID
exports.getLikeById = async (req, res) => {
  try {
    const like = await Like.findById(req.params.likeId);
    res.status(200).json(like);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener like por ID' });
  }
};

// Crear un nuevo like
exports.createLike = async (req, res) => {
  try {
    const newLike = await Like.create(req.body);
    res.status(201).json(newLike);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear like' });
  }
};
