const User = require('../models/User');

const createUser = async (req, res) => {
  
  try {
    const { username, email, password } = req.body;
    const displayName = username;
    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(412).json({ message: 'El usuario ya existe' });
    }

    // Crear un nuevo usuario
    const newUser = new User({ username, email, displayName });
    await newUser.setPassword(password);
    await newUser.save();

    const sanitizedUser = { username: newUser.username, _id: newUser._id };
    return res.status(201).json(sanitizedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al crear el usuario', error });
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

module.exports = {
  createUser,
  getUserById,
};
