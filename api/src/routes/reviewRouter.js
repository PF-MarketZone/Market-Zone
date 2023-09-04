const { Router } = require('express');
//importo los controller:
const {
  getReviewsHandler,
  getReviewsByIdHandler,
  getBooleanReviewByUserAndProduct,
} = require('../handlers/getReviewsHandler');
const { createReview } = require('../handlers/postReviewsHandler');

const reviewRouter = Router();

reviewRouter.get('/', getReviewsHandler);
reviewRouter.get('/validation', getBooleanReviewByUserAndProduct);
reviewRouter.get('/:id', getReviewsByIdHandler);
reviewRouter.post('/create', createReview);

module.exports = reviewRouter;
