// ---Requerimos los modelos de la BD

// const { modeloEjemplo } = require('../db');

// ---Creamos la funcion que nos traera la info de los modelos de la BD

const storeListDb = async () => {
  // Solicitamos la info a la BD
  // const listOfStore = await modeloEjemplo.
};

const storeByName = async (name) => {
  // Solicitamos la info de la tienda con el "nombre" que nos llega por parametro
};

const storeById = async (id) => {
  // Solicitamos la info de la tienda con el "id" pasado por parametro
};

const storeCreate = async (name, image, categories) => {
  // Creamos una tienda nuevo con los parametros recibidos
};

module.exports = {
  storeListDb,
  storeByName,
  storeById,
  storeCreate,
};
