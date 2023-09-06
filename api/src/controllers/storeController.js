// ---Requerimos los modelos de la BD
const Store = require('../models/store');

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
  console.log(storeById)
  return storeById;

};

const storeCreate = async ( user, name, logo, image, description) => {
  console.log(name);

  // Creamos una tienda nuevo con los parametros recibidos
  const newStore = new Store({
    user: user,
    name: name,
    logo: logo,
    image: image,
    description: description
  });
  await newStore.save();
};

module.exports = {

  storeByName,
  storeById,
  storeCreate,
};
