const {
  createNewProduct,
  updateProduct,
  searchByIdProduct,
  updateStock,
} = require('../controllers/productController');
const { responseMaper } = require('../helpers/responseMaper');

const createProductHandler = async (req, res) => {
  try {
    const {
      storeId,
      name,
      description,
      image,
      color,
      price,
      stock,
      category,
      subcategory,
    } = req.body;
    // if (!name || !description || !image || !price || !tags) {
    //   res.status(404).json(true, 'Completa los campos requeridos', null);
    // }
    const newProduct = createNewProduct(
      storeId,
      name,
      description,
      image,
      color,
      price,
      stock,
      category,
      subcategory
    );
    res
      .status(200)
      .json(
        responseMaper(false, `Producto ${name} agregado con exito`, newProduct)
      );
  } catch (error) {
    res
      .status(500)
      .json(responseMaper(true, 'No se pudo crear el producto', null));
  }
};

const updateProductHandler = async (req, res) => {
  try {
    const {
      _id,
      storeId,
      name,
      description,
      image,
      color,
      price,
      stock,
      category,
      subcategory,
    } = req.body;
    if (!_id) {
      return res
        .status(404)
        .json(responseMaper(true, 'Error al buscar el Producto', null));
    }
    const result = await updateProduct(
      _id,
      storeId,
      name,
      description,
      image,
      color,
      price,
      stock,
      category,
      subcategory
    );
    res.status(200).json(responseMaper(false, 'Producto actualizado', result));
  } catch (error) {
    res
      .status(500)
      .json(responseMaper(true, 'No se pudo modificar el producto', null));
  }
};

const updateStockProductHandler = async (req, res) => {
  try {
    const { _id, stock } = req.body;
    const modifyStock = await updateStock(_id, stock);
    res.status(200).json(responseMaper(false, 'Stock modificado', modifyStock));
  } catch (error) {
    res
      .status(500)
      .json(responseMaper(true, 'Error al modificar el stock', null));
  }
};

module.exports = {
  createProductHandler,
  updateProductHandler,
  updateStockProductHandler,
};
