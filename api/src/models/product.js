var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: Array, required: true },
    description: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: String, required: true },
    stock: { type: Number, required: true },
    tags: { type: Array, required: true },
  },
  { timestamps: true }
);

const Product = mongoose.model('product', productSchema);
module.exports = Product;
