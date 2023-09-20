const Order = require('../models/order');
const Review = require('../models/reviews');

const createReview = async (req, res, next) => {
  try {
    const { user } = req.query;
    const { products, rating, title, description } = req.body;
    //Valido que le user tenga una order hecha con su id al mismo product( según id)

    // console.log('ID de usuario ', user);
    // console.log(req.body);

    const order1 = await Order.findOne({
      user: user,
    });

    const order = await Order.findOne({
      user: user,
      products: products,
      transactionStatus: 'approved',
    });

    // console.log(order);
    //si no es asi lanzo error
    if (!order) {
      return res
        .status(400)
        .json({ message: 'El usuario no ha comprado este producto' });
    }
    //si coincide ocn una order entonces puede hacer review post
    const review = new Review({
      user: user,
      product: products,
      rating: rating,
      title: title,
      description: description,
    });
    await review.save();

    res
      .status(201)
      .json({ message: 'Reseña creada exitosamente', review: review });
  } catch (error) {
    console.log(error, 'HANDLER');
    res
      .status(400)
      .send({ message: 'El usuario no ha comprado este producto' });
  }
};

module.exports = { createReview };
