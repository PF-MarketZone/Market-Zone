const Product = require('../models/product');

//=================================================================
// Busca todos los productos
//=================================================================

const allProducts = async () => {
  const products = await Product.find();
  return products;
};

//=================================================================
// Busca todos los productos con el nombre recibido por parametro
//=================================================================

const searchByNameProduct = async (name) => {
  const products = await Product.findOne({ name: name });
  return products;
};

//=================================================================
// Busca los productos con el id proporcionado
//=================================================================

const searchByIdProduct = async (id) => {
  const productById = await Product.findById(id);
  // console.log(productById);
  return productById;
};

//=================================================================
// Busca los productos con el id proporcionado y lo elimina
//=================================================================

const searchByIdAndRemoveProduct = async (id) => {
  await Product.findByIdAndRemove(id);
  const restProducts = await allProducts();
  console.log(restProducts);
  return restProducts;
};

//=================================================================
// Crea un nuevo producto con los parametros recibidos
//=================================================================

const createNewProduct = async (
  name,
  description,
  image,
  color,
  price,
  stock,
  tags
) => {
  const productData = new Product({
    name: name,
    description: description,
    image: image,
    color: color,
    price: price,
    stock: stock,
    tags: tags,
  });

  await productData
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = {
  createNewProduct,
  allProducts,
  searchByNameProduct,
  searchByIdProduct,
  searchByIdAndRemoveProduct,
};
