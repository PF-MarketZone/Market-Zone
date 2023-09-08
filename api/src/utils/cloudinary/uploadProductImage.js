const { uploadImage } = require('./cloudinary');
const fs = require('fs-extra');

const uploadProductImages = async (req) => {
  const imageObjects = [];

  if (req.files && req.files.image) {
    const images = Array.isArray(req.files.image)
      ? req.files.image
      : [req.files.image];
    for (const imageFile of images) {
      try {
        const result = await uploadImage(imageFile.tempFilePath);

        imageObjects.push({
          url: result.secure_url,
          public_id: result.public_id,
        });

        //elimina las imagenes temporales una vez cargadas a cloudinary y guardadas las url en db
        await fs.unlink(imageFile.tempFilePath);
      } catch (uploadError) {
        console.error('Error al cargar la imagen:', uploadError);
      }
    }
  }

  return imageObjects;
};

module.exports = {
  uploadProductImages,
};
