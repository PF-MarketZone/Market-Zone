const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
  {
    storeId: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String },
    price: { type: Number },
    image: [
      {
        url: { type: String, required: true },
        public_id: { type: String, required: true },
      },
    ],
    description: { type: String, maxLength: 2500 },
    stock: Number,
    categories: {
      type: {
        category: { type: String, required: false },
        subcategory: { type: String, required: false },
      },
      required: true,
    },
    color: String,
    deleted: { type: Boolean, default: false },
  },

  { collection: 'products' }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
