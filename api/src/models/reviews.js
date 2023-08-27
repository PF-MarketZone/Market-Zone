const { Schema, model } = require('mongoose');

  const reviewSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
<<<<<<< HEAD
    transaction: { type: Schema.Types.ObjectId, ref: 'Purchase', required: true }, 
    rating: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    
=======
    transaction: { type: Schema.Types.ObjectId, ref: 'Purchase', required: true },
    rating: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },

>>>>>>> 18de7f25002793d46641ac23984c4c57cccb035a
  },  {collection: 'reviews',});

const Review = model('Review', reviewSchema);

module.exports = Review;
