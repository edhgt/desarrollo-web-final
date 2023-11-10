const express = require('express');
const photoController = require('../controllers/photoController');

const router = express.Router();

router.get('/photos', photoController.getAllPhotos);
router.get('/photos/:photoId', photoController.getPhotoById);
router.post('/photos', photoController.createPhoto);

module.exports = router;