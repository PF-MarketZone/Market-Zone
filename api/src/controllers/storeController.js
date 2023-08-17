// ---Requerimos los modelos de la BD

const Store = require('../models/store');

//=================================================================
// Busca todas las tiendas
//=================================================================

const storeListDb = async () => {
  console.log('entramos en la bdd');
  // Solicitamos la info a la BD
  const listOfStore = await Store.find();
  return listOfStore;
};

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
};

const storeCreate = async (name, image, categories) => {
  console.log(name);
  // Creamos una tienda nuevo con los parametros recibidos
};

module.exports = {
  storeListDb,
  storeByName,
  storeById,
  storeCreate,
};
