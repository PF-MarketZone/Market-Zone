const {
  storeByName,
  storeById,
} = require('../controllers/storeController');
const { responseMaper } = require('../helpers/responseMaper');
const Store = require('../models/store');

const getAllStoreHandler = async (req, res) => {
  try {
    const { name, user } = req.query;
    
    if (user) {
      // Si se proporciona un parámetro 'user', busca tiendas por usuario.
      const storesByUser = await Store.find({ user: user });
      return res.status(200).json(responseMaper(false, 'Estas son las tiendas', storesByUser));
    }

    if (name) {
      // Si se proporciona un parámetro 'name', busca tiendas por nombre.
      const stores = await storeByName(name);
      return res.status(200).json(responseMaper(false, 'Estas son las tiendas', stores));
    }

    // Si no se proporcionan parámetros, busca todas las tiendas.
    const stores = await Store.find();
    return res.status(200).json(responseMaper(false, 'Estas son las tiendas', stores));
  } catch (error) {
    const { name } = req.query;
    return res.status(404).json(
      responseMaper(
        true,
        `No se encontraron tiendas con el nombre de ${name}`,
        null
      )
    );
  }
};

const getByIdStoreHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const findStoreById = await storeById(id);
    res
    .status(200)
    .json( responseMaper(
          false,
          `Esta es la tienda referida al id ${id}`,
          findStoreById) )
    //console.log('llegando al handler getStore');
  } catch (error) {
    const { id } = res.params;
    res
      .status(404)
      .json(
        responseMaper(true, `No se encontraron tiendas con el id ${id}`, null)
      );
  }
};






module.exports = { getAllStoreHandler, getByIdStoreHandler };
