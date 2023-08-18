const Product = require('../models/product');

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

  await productData.save();
};

//=================================================================
// Actualiza un nuevo producto con los parametros recibidos
//=================================================================

const updateProduct = async (
  id,
  name,
  description,
  image,
  color,
  price,
  stock,
  tags
) => {
  // Buscamos el producto a actualizar

  const productFinded = await searchByIdProduct(id);
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
  if (tags) {
    productFinded.tags = tags;
  }
  await productFinded.save();
};

module.exports = {
  createNewProduct,
  allProducts,
  searchByNameProduct,
  searchByIdProduct,
  searchByIdAndRemoveProduct,
  updateProduct,
};

// case description:
//   const updateDescription = await Product.findByIdAndUpdate(id, {
//     description: description,
//   });
//   return updateDescription;
// case image:
//   const updateImage = await Product.findByIdAndUpdate(id, { image: image });
//   return updateImage;
// case color:
//   const updateColor = await Product.findByIdAndUpdate(id, { color: color });
//   return updateColor;
// case price:
//   const updatePrice = await Product.findByIdAndUpdate(id, { price: price });
//   return updatePrice;
// case stock:
//   const updateStock = await Product.findByIdAndUpdate(id, { stock: stock });
//   return updateStock;
// case tags:
//   const updateTags = await Product.findByIdAndUpdate(id, { tags: tags });
//   return updateTags;
