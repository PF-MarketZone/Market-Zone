const { Router } = require('express');
//importo los controller:
const {
    getReviewsHandler,
    getReviewsByIdHandler
} = require('../handlers/getReviewsHandler');
const { createReview } = require('../controllers/postReviewsController');

const reviewRouter = Router();

reviewRouter.get('/', getReviewsHandler);
reviewRouter.get('/:id', getReviewsByIdHandler);
reviewRouter.post('/create', createReview);



module.exports = reviewRouter;