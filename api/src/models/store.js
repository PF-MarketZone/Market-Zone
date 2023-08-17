var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var storeSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: Array, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Store = mongoose.model('products', storeSchema);
module.exports = Store;
