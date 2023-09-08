// ---Requerimos los modelos de la BD
const Store = require('../models/store');

const { uploadImage } = require('../utils/cloudinary/cloudinary');
const fs = require('fs-extra');

//=================================================================
// Busca todas las tiendas
//=================================================================

// const storeListDb = async () => {
//   //console.log('entramos en el controller de storeList');
//   // Solicitamos la info a la BD
//   const listOfStore = await Store.find();
//   return listOfStore;
// };
//=================================================================
// Busca todas las tiendas que coincidan con el nombre recibido
//=================================================================
const storeByName = async (name) => {
  // Solicitamos la info de la tienda con el "nombre" que nos llega por parametro
  const store = await Store.findOne({ name: name });
  return store;
};

//=================================================================
// Busca todas las tiendas que coincidan con el id recibido
//=================================================================

const storeById = async (id) => {
  // Solicitamos la info de la tienda con el "id" pasado por parametro
  console.log('llegando al controller byid');
  const storeById = await Store.findById(id);
  console.log(storeById);
  return storeById;
};

//=================================================================
// Crea una Tienda
//=================================================================

const storeCreate = async (req, user, name, image, description) => {
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
        await fs.unlink(imageFile.tempFilePath);
      } catch (uploadError) {
        console.error('Error al cargar la imagen:', uploadError);
      }
    }
  }

  const newStore = new Store({
    user,
    name,
    logo: imageObjects[0].url,
    image: imageObjects[0].url,
    description,
  });

  const createdNewStore = await newStore.save();

  return createdNewStore;
};

module.exports = {

  storeByName,
  storeById,
  storeCreate,
};
