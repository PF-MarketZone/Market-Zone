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

>>>>>>> d8933b61361f9f7090de45b2d22614303493f3a5
  },  {collection: 'reviews',});

const Review = model('Review', reviewSchema);

module.exports = Review;
