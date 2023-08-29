const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
  {
    storeId: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String },
    price: { type: Number },
    image: [{ url: { type: String } }],
    description: { type: String, maxLength: 2500 },
    stock: Number,
    categories: {
      type: {
        category: { type: String },
        subcategory: { type: String },
      },
    },
    color: String,
  },
  { collection: 'products' }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
