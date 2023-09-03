
const Order = require('../models/order')
const Review = require('../models/reviews')

 const createReview=  async(userId, productId, rating, title, description)=> {
  try {
  //Valido que le user tenga una order hecha con su id al mismo product( segun id)
    const order = await Order.findOne({ user: userId, products: productId, transactionStatus: 'success'});

    //si no es asi lanzo eerror
    if (!order) {
      throw new Error("El usuario no ha comprado este producto");
    }
//si coincide ocn una order entonces puede hacer review post
    const review = new Review({
      user: userId,
      product: productId,
      rating: rating,
      title: title,
      description: description
    });
    await review.save();

  return review; 
  } catch (error) {
    throw error;
  }
}

    

  
module.exports = {createReview};