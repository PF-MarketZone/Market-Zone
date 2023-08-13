const {
  allProducts,
  productById,
  nameProducts,
} = require('../controllers/productController');
const { responseMaper } = require('../helpers/responseMaper');

const getProductHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const res = name ? await nameProducts(name) : await allProducts();
    res.status(200).json(responseMaper(false, 'Estos son los productos', res));
    console.log('llegando al handler getProduct');
  } catch (error) {
    res
      .status(404)
      .send(responseMaper(true, 'No se encontraron productos', null));
  }
};

const getProductByIdHandler = (req, res) => {
  try {
    const { id } = req.parms;
    const res = productById(id);
    res
      .status(200)
      .json(
        responseMaper(
          false,
          `Aqui tienes el producto solicitado por el id ${id}`,
          res
        )
      );
  } catch (error) {
    const { id } = req.params;
    res
      .status(400)
      .json(
        responseMaper(
          true,
          `No se encotro el producto solicitado por el id ${id}`,
          null
        )
      );
  }
};

module.exports = { getProductHandler, getProductByIdHandler };
