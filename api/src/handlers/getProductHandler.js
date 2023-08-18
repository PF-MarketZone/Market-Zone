const { productById } = require('../controllers/productController');
// const { searchByNameProduct } = require('../helpers/helpersCalls.mongodb');
const { allProducts } = require('../helpers/helpersCalls.mongodb');


const { responseMaper } = require('../helpers/responseMaper');

const getProductHandler = async (req, res) => {
  try {
    // const { name } = req.query;
    const result = await allProducts();
 res.status(200).json(result);
   
  } catch (error) {
    res.send(error);
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
          `No se encontró el producto solicitado por el id ${id}`,
          null
        )
      );
  }
};

module.exports = { getProductHandler, getProductByIdHandler };
