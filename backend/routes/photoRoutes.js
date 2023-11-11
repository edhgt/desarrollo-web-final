const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { uploadPhoto, getAllPhotos } = require('../controllers/photoController');
const { uploadToS3, resizePhoto } = require('../controllers/s3Controller');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload/:id', upload.single('photo'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  try {
    const newPhoto = await uploadPhoto(req.file.buffer, req.file.originalname);
    res.status(200).json({ message: 'File uploaded successfully.', photo: newPhoto });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const photos = await getAllPhotos(req.params.id);
    res.json(photos);
  } catch (error) {
    console.error('Error fetching photos:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
