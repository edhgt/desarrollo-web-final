const Comment = require('../models/Comment');

// Obtener todos los comentarios
exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener comentarios' });
  }
};

// Obtener un comentario por su ID
exports.getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener comentario por ID' });
  }
};

// Crear un nuevo comentario
exports.createComment = async (req, res) => {
  try {
    const newComment = await Comment.create(req.body);
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear comentario' });
  }
};
