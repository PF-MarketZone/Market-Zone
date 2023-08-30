const Product = require('../models/product');
const mongoose = require('mongoose');
//=================================================================
// Busca todos los productos
//=================================================================
const allProducts = async () => {
  // Solicitamos la info a la BD
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
  return productById;
};
//=================================================================
// Busca los productos con el id proporcionado y lo elimina
//=================================================================
const searchByIdAndRemoveProduct = async (id) => {
  console.log(id);
  await Product.findByIdAndRemove(id);
  const restProducts = await allProducts();
  // console.log(restProducts);
  return restProducts;
};

//=================================================================
// Crea un nuevo producto con los parametros recibidos
//=================================================================

const createNewProduct = async (
  storeId,
  name,
  description,
  image,
  color,
  price,
  stock,
  category,
  subcategory
) => {
  console.log(category, subcategory);
  const storeidBody = storeId;
  const storeDefault = '64daf18450c25495a4a6a611';
  const productData = new Product({
    storeId: storeId ? storeidBody : storeDefault,
    name: name,
    description: description,
    image: image,
    color: color,
    price: price,
    stock: stock,
    categories: {
      category: category,
      subcategory: subcategory,
    },
  });
  //console.log(productData)
  await productData.save();
};

//=================================================================
// Actualiza un nuevo producto con los parametros recibidos
//=================================================================

const updateProduct = async (
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
) => {
  // Buscamos el producto a actualizar
  const productFinded = await searchByIdProduct(_id);
  if (storeId) {
    productFinded.storeId = storeId;
  }
  if (name) {
    productFinded.name = name;
  }
  if (description) {
    productFinded.description = description;
  }
  if (image) {
    productFinded.image = image;
  }
  if (color) {
    productFinded.color = color;
  }
  if (price) {
    productFinded.price = price;
  }
  if (stock) {
    productFinded.stock = stock;
  }

  if (category && subcategory) {
    productFinded.categories = {
      category: category,
      subcategory: subcategory,
    };
  }
  await productFinded.save();
  console.log(productFinded);
};

//=================================================================
// Actualiza el stock de un producto con los parametros recibidos
//=================================================================

const updateStock = async (id, stock) => {
  // console.log(id, stock);
  const result = await Product.findById(_id);
  result.stock = result.stock - stock;
  await result.save();
  return result;
};

module.exports = {
  createNewProduct,
  allProducts,
  searchByNameProduct,
  searchByIdProduct,
  searchByIdAndRemoveProduct,
  updateProduct,
  updateStock,
};
