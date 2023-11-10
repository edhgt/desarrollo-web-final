const express = require('express');
const likeController = require('../controllers/likeController');

const router = express.Router();

router.get('/likes', likeController.getAllLikes);
router.get('/likes/:likeId', likeController.getLikeById);
router.post('/likes', likeController.createLike);

module.exports = router;
