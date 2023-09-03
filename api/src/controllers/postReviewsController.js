
const Order = require('../models/order')
const Review = require('../models/reviews');
const mongoose = require('mongoose');


 const createReview=  async(req, res, next) => {
  try {
    const { user }=req.query
    const {products, rating, title, description } = req.body;
  //Valido que le user tenga una order hecha con su id al mismo product( segun id)
 
console.log("ID de usuario ",user);
  
  const order1 = await Order.findOne({ 
    user: user
  });
  console.log(order1)



  const order = await Order.findOne({ 
    user: user, 
    products: products,
    transactionStatus: 'success'
  });

    //si no es asi lanzo eerror
    if (!order) {
     res.status(400).json({ message: "El usuario no ha comprado este producto" });

    }
//si coincide ocn una order entonces puede hacer review post
    const review = new Review({
      user: user,
      product: products,
      rating: rating,
      title: title,
      description: description
    });
    await review.save();

    res.status(201).json({ message: 'Reseña creada exitosamente', review: review });
  } catch (error) {
    console.log(error, "HANDLER")
    res.status(400).send({message: "El usuario no ha comprado este producto" })
  }
}

    

  
module.exports = {createReview};