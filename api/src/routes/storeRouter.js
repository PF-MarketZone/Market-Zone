const { Router } = require('express');
const {
  getAllStoreHandler,
  getByIdStoreHandler,
  getProductsInStoreHandler,
} = require('../handlers/getStoreHandler');
const { createStoreHandler } = require('../handlers/postStoreHandler');
const passport = require('passport');
const { checkRoles } = require('../middlewares/checkSellerRole');
const { verifyToken } = require('../middlewares/verifyToken');

const storeRouter = Router();

storeRouter.get('/', getAllStoreHandler);
storeRouter.get('/:id', getByIdStoreHandler);
storeRouter.get('/products/:id', getProductsInStoreHandler);

storeRouter.post(
  '/create',
  verifyToken,
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'seller'),
  createStoreHandler
);

module.exports = storeRouter;
