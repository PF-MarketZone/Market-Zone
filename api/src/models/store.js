const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true,},
  name: {type: String, required: true,},
  logo: String,
  image: String,
  description: String,
}, {collection: 'store',});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
