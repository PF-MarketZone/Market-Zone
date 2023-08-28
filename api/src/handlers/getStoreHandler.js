const {
  storeListDb,
  storeByName,
  storeById,
} = require('../controllers/storeController');
const { responseMaper } = require('../helpers/responseMaper');

const getAllStoreHandler = async (req, res) => {
  try {
    // Si la ruta trae name por Query que haga la busqueda correspondiente de lo contrario que traiga todas las tiendas,
    const { name } = req.query;
    const stores = name ? await storeByName(name) : await storeListDb();
    res.status(200).json(responseMaper(false, 'Estas son las tiendas', stores));
  } catch (error) {
    const { name } = req.query;
    res
      .status(404)
      .json(
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
