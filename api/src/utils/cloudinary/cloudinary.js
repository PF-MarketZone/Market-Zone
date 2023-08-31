const cloudinary = require('cloudinary').v2;
const {CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;
          
cloudinary.config({ 
  cloud_name: CLOUDINARY_CLOUD_NAME, 
  api_key: CLOUDINARY_API_KEY, 
  api_secret: CLOUDINARY_API_SECRET,
  secure: true 
});

const uploadImage = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'products'
    }) 
}

const deleteImage = async (public_id) => {
    return await cloudinary.uploader.destroy(public_id)
}


module.exports = {
    uploadImage, 
    deleteImage
}
