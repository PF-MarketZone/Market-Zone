const {
  searchByNameProduct,
  searchByIdProduct,
  searchByIdAndRemoveProduct,
} = require('../controllers/productController');
const { allProducts } = require('../controllers/productController');

const { responseMaper } = require('../helpers/responseMaper');

const getProductHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const result = name ? await searchByNameProduct(name) : await allProducts();
    res
      .status(200)
      .json(responseMaper(false, 'Estos son los productos', result));
  } catch (error) {
    res
      .status(404)
      .send(responseMaper(true, 'No se encontraron productos', null));
  }
};

const getProductByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await searchByIdProduct(id);
    if (!result) {
      res
        .status(400)
        .json(
          responseMaper(
            true,
            `No se encontró el producto solicitado por el id: ${id}`,
            null
          )
        );
    } else {
      res
        .status(200)
        .json(
          responseMaper(
            false,
            `Aqui tienes el producto solicitado por el id: ${id}`,
            result
          )
        );
    }
  } catch (error) {
    res
      .status(500)
      .json(responseMaper(true, `Error al buscar el producto`, null));
  }
};

const getDeleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const findProduct = await searchByIdProduct(id);
    if (findProduct === null) {
      res
        .status(404)
        .json(
          responseMaper(true, `El producto con el id: ${id} no existe`, null)
        );
    } else {
      await searchByIdAndRemoveProduct(id);
      res
        .status(200)
        .json(
          responseMaper(false, `El producto fue removido ${id} con exito`, null)
        );
    }
  } catch (error) {
    res.status(500).json(responseMaper(true, `Error al buscar el id`));
  }
};

module.exports = { getProductHandler, getProductByIdHandler, getDeleteProduct };
