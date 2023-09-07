const { Router } = require('express');
const {
  getAllStoreHandler,
  getByIdStoreHandler,
} = require('../handlers/getStoreHandler');
const { createStoreHandler } = require('../handlers/postStoreHandler');
const passport = require('passport');
const { checkRoles } = require('../middlewares/checkSellerRole');
const { verifyToken } = require('../middlewares/verifyToken');

const storeRouter = Router();

storeRouter.get('/', getAllStoreHandler);
storeRouter.get('/:id', getByIdStoreHandler);

storeRouter.post(
  '/create',
  verifyToken,
  passport.authenticate('jwt', { session: false }),
  createStoreHandler
);

module.exports = storeRouter;
