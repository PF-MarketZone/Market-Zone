const { Router } = require('express');
const {
  getAllStoreHandler,
  getByIdStoreHandler,
} = require('../handlers/getStoreHandler');
const { createStoreHandler } = require('../handlers/postStoreHandler');

const storeRouter = Router();

storeRouter.get('/', getAllStoreHandler);
storeRouter.get('/:id', getByIdStoreHandler);
storeRouter.post('/create', createStoreHandler);

module.exports = storeRouter;
