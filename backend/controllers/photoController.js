const Photo = require('../models/Photo');
const path = require('fs-system');

const uploadPhoto = async (buffer, originalName) => {
  const originalKey = `photos/originals/${Date.now()}_${path.basename(originalName)}`;

  // Sube la foto original a S3
  await uploadToS3(buffer, originalKey);

  // Redimensiona y sube la foto a diferentes tamaños
  const sizes = [300, 600, 1200];
  const resizedUrls = await Promise.all(
    sizes.map(async (size) => {
      const resizedBuffer = await resizePhoto(buffer, size);
      const resizedKey = `photos/resized/${size}_${originalKey}`;
      await uploadToS3(resizedBuffer, resizedKey);

      return { size: size.toString(), url: `URL_BASE/${resizedKey}` };
    })
  );

  // Guarda la información de la foto en la base de datos
  const newPhoto = new Photo({
    key: originalKey,
    originalUrl: `URL_BASE/${originalKey}`,
    resizedUrls,
  });

  await newPhoto.save();

  return newPhoto;
};

const getAllPhotos = async (_id) => {
  try {
    const photos = await Photo.find({ _id });
    return photos;
  } catch (error) {
    console.error('Error fetching photos from MongoDB:', error);
    throw error;
  }
};

module.exports = { uploadPhoto, getAllPhotos };
