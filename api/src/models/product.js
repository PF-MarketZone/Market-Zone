const mongoose = require('mongoose');
<<<<<<< HEAD

const productSchema = new mongoose.Schema(
  {
    storeId: { type: mongoose.Schema.Types.ObjectId, required: true },
=======
const productSchema = new mongoose.Schema(
  {
    storeId: { type: mongoose.Schema.Types.ObjectId },
>>>>>>> 18de7f25002793d46641ac23984c4c57cccb035a
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: [{ url: { type: String, required: true } }],
    description: { type: String, maxLength: 2500 },
    stock: Number,
<<<<<<< HEAD
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
    categories: {type: {
      category: {type: String, required: true}, 
      subcategory: {type: String, required: true}
      }, required: true},
>>>>>>> 18de7f25002793d46641ac23984c4c57cccb035a
    color: String,
  },
  { collection: 'products' }
);

const Product = mongoose.model('Product', productSchema);

<<<<<<< HEAD
module.exports = Product;
=======
module.exports = Product;
>>>>>>> 18de7f25002793d46641ac23984c4c57cccb035a
