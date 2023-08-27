const mongoose = require('mongoose');
<<<<<<< HEAD

=======
>>>>>>> 18de7f25002793d46641ac23984c4c57cccb035a
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
