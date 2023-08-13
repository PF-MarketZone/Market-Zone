const { createNewProduct } = require('../controllers/productController');
const { responseMaper } = require('../helpers/responseMaper');

const createProductHandler = async (req, res) => {
  try {
    const { name, description, image, color, reviews, price, tags } = req.query;
    if (
      !name ||
      !description ||
      !image ||
      !color ||
      !reviews ||
      !price ||
      !tags
    ) {
      res.status(404).json(true, 'Completa los campos requeridos', null);
    }
    const newProduct = createNewProduct(
      name,
      description,
      image,
      color,
      reviews,
      price,
      tags
    );
    res
      .status(200)
      .json(
        responseMaper(false, `Producto ${name} agregado con exito`, newProduct)
      );
  } catch (error) {
    res
      .status(404)
      .json(responseMaper(true, 'No se pudo crear el producto', null));
  }
};

module.exports = { createProductHandler };
