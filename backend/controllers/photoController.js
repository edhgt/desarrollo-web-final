const Photo = require('../models/Photo');

// Obtener todas las fotos
exports.getAllPhotos = async (req, res) => {
  try {
    const photos = await Photo.find();
    res.status(200).json(photos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener fotos' });
  }
};

// Obtener una foto por su ID
exports.getPhotoById = async (req, res) => {
  try {
    const photo = await Photo.findById(req.params.photoId);
    res.status(200).json(photo);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener foto por ID' });
  }
};

// Crear una nueva foto
exports.createPhoto = async (req, res) => {
  try {
    const newPhoto = await Photo.create(req.body);
    res.status(201).json(newPhoto);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear foto' });
  }
};
