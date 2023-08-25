const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    storeId: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: [{ url: { type: String, required: true } }],
    description: { type: String, maxLength: 2500 },
    stock: Number,
    categories: {type: {
      category: {type: String, required: true}, 
      subcategory: {type: String, required: true}
      }, required: true},
    color: String,
  },
  { collection: 'products' }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;