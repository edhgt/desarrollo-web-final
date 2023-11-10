const User = require('../models/User');

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuario por ID' });
  }
};

// Otros controladores según tus necesidades...

module.exports = {
  createUser,
  getUserById,
  // Otros controladores aquí...
};
