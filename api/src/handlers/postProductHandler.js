const {
  createNewProduct,
  updateProduct,
  searchByIdProduct,
  updateStock,
} = require('../controllers/productController');
const { responseMaper } = require('../helpers/responseMaper');
const {
  uploadProductImages,
} = require('../utils/cloudinary/uploadProductImage');
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
    console.log('IMAGEEE CREATEEE', image);
    const newProduct = createNewProduct(
      req,
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
    console.log('Entrando en updateProductHandler');
    const {
      _id,
      storeId,
      name,
      description,
      color,
      price,
      stock,
      category,
      subcategory,
    } = req.body;

    const newImages = await uploadProductImages(req);
    const oldImages = JSON.parse(req.body.oldImages);
    const image = oldImages.concat(newImages);

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

    console.log(result);
    if (result) {
      res
        .status(200)
        .json(responseMaper(false, 'Producto actualizado', result));
    }
  } catch (error) {
    console.error('Error en updateProductHandler:', error);
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
