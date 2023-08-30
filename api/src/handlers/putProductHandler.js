
const Product = require('../models/product'); 

const putDeletedHandler = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    product.deleted = !product.deleted;
    await product.save();

    return res.json({ message: 'Estado del producto actualizado' });
  } catch (error) {
    console.error('Error al cambiar el estado del producto:', error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

module.exports = { putDeletedHandler };
