const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  totalAmount: { type: Number, required: true },
  productIds: [{ type: mongoose.Schema.Types.ObjectId, required: true }],
  date: { type: Date, required: true },
  storeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
  city: { type: String, required: true },
});

const Sale = mongoose.model('Sale', saleSchema);

module.exports = Sale;