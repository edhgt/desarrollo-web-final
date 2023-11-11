const aws = require('aws-sdk');
const sharp = require('sharp');
require('dotenv').config();

aws.config.update({
  accessKeyId: process.env.AWS_S3_CLIENT_ID,
  secretAccessKey: process.env.AWS_S3_ACCESS_KEY,
  region: process.env.AWS_S3_REGION,
});

const s3 = new aws.S3();

const uploadToS3 = async (buffer, key) => {
  const params = {
    Bucket: 'tu-bucket-name',
    Key: key,
    Body: buffer,
  };

  return s3.upload(params).promise();
};

const resizePhoto = async (buffer, size) => {
  return sharp(buffer).resize({ width: size }).toBuffer();
};

module.exports = { uploadToS3, resizePhoto };
