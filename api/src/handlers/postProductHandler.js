const { createNewProduct } = require('../helpers/helpersCalls.mongodb');
const { responseMaper } = require('../helpers/responseMaper');

const createProductHandler = async (req, res) => {
  console.log(req.body);
  try {
    const { name, description, image, color, price, stock, tags } = req.body;
    // if (!name || !description || !image || !price || !tags) {
    //   res.status(404).json(true, 'Completa los campos requeridos', null);
    // }
    const newProduct = createNewProduct(
      name,
      description,
      image,
      color,
      price,
      stock,
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
