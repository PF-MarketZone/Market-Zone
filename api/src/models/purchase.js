const mongoose = require('mongoose');
<<<<<<< HEAD

const purchaseSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true,},
  products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Products',},],
  totalPrice: {type: Number,required: true,},
  paymentMethod: {type: String, required: true,},
  transactionDate: Date,
  transactionStatus: String,
}, {collection: 'purchase',});
=======
const purchaseSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Products' }],
    totalPrice: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    transactionDate: Date,
    transactionStatus: String,
  },
  { collection: 'purchase' }
);
>>>>>>> d8933b61361f9f7090de45b2d22614303493f3a5

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
