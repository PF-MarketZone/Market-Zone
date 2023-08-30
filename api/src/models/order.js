const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema(
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
  { collection: 'order' }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
