const mongoose = require('mongoose');
<<<<<<< HEAD

const productSchema = new mongoose.Schema(
  {
    storeId: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: [{ url: { type: String, required: true } }],
    description: { type: String, maxLength: 2500 },
    stock: Number,
    categories: [
      {
        category: {
          type: String,
          required: true,
        },
        subcategories: [
          {
            type: String,
          },
        ],
      },
    ],
=======
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
>>>>>>> d8933b61361f9f7090de45b2d22614303493f3a5
    color: String,
  },
  { collection: 'products' }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
