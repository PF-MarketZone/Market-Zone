const mongoose = require('mongoose');
const purchaseSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true,},
  products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Products',},],
  totalPrice: {type: Number,required: true,},
  paymentMethod: {type: String, required: true,},
  transactionDate: Date,
  transactionStatus: String,
}, {collection: 'purchase',});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
