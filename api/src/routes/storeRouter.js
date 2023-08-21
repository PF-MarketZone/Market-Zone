const { Router } = require('express');
const {
  getAllStoreHandler,
  getByIdStoreHandler,
} = require('../handlers/getStoreHandler');
const { createStoreHandler } = require('../handlers/postStoreHandler');
const passport = require('passport');
const { checkRoles } = require('../middlewares/checkSellerRole');

const storeRouter = Router();

storeRouter.get('/', getAllStoreHandler);
storeRouter.get('/:id', getByIdStoreHandler);

storeRouter.post(
  '/create',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'seller'),
  createStoreHandler
);

module.exports = storeRouter;
