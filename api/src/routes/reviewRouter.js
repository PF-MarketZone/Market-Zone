const { Router } = require('express');
//importo los controller:
const {
    getReviewsHandler,
    getReviewsByIdHandler,
    getReviewsByIProductHandler
} = require('../handlers/getReviewsHandler');
const { createReview } = require('../handlers/postReviewsHandler');

const reviewRouter = Router();

reviewRouter.get('/', getReviewsHandler);
reviewRouter.get('/:id', getReviewsByIdHandler);
reviewRouter.get('/:product', getReviewsByIProductHandler);
reviewRouter.post('/create', createReview);



module.exports = reviewRouter;