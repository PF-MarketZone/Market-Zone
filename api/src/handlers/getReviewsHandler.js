const Order = require('../models/order');
const Review = require('../models/reviews');

// const getReviewsHandler = async ( req, res)=>{
//     try {
//         const reviews =  await Review.find();
//         res.status(200).send( reviews);
//        } catch (error) {
//         res.send({message: 'Error al buscar los reviews', error: error.message });
//       }
// };
const getReviewsHandler = async (req, res) => {
  try {
    const { productId, userId } = req.query;

    if (productId) {
      // Busco por query en el caso que venga un productId
      const reviews = await Review.find({ product: productId });

      if (reviews.length === 0) {
        return res
          .status(404)
          .json({ message: 'Este producto aún no cuenta con reviews' });
      }

      return res.status(200).json(reviews);
    } else if (userId) {
      // Busco por query en el caso que venga un userID
      const reviews = await Review.find({ user: userId });

      if (reviews.length === 0) {
        return res
          .status(404)
          .json({ message: 'Este usuario aún no ha realizado reviews' });
      }

      return res.status(200).json(reviews);
    } else {
      //si no recibo nada por query traigo todos---vv
      const reviews = await Review.find();
      return res.status(200).json(reviews);
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error al buscar los reviews', error: error.message });
  }
};

const getReviewsByIdHandler = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const review = await Review.findById(reviewId);
    return res.status(200).json(review);
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error al buscar la review', error: error.message });
  }
};

const getBooleanReviewByUserAndProduct = async (req, res, next) => {
  const { userId, productId } = req.body;

  try {
    const order = await Order.findOne({
      user: userId,
      products: productId,
      transactionStatus: 'success',
    });

    if (!order) {
      return res
        .status(404)
        .json({ message: `No hay coincidencia`, status: false });
    } else {
      return res
        .status(200)
        .json({ message: `Hay coincidencia`, status: true });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getReviewsHandler,
  getReviewsByIdHandler,
  getBooleanReviewByUserAndProduct,
};
