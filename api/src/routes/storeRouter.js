const { Router } = require('express');
const {
  getAllStoreHandler,
  getByIdStoreHandlere,
} = require('../handlers/getStoreHandler');
const { createStoreHandler } = require('../handlers/postStoreHandler');

const storeRouter = Router();

storeRouter.get('/', getAllStoreHandler);
storeRouter.get('/:id', getByIdStoreHandlere);
storeRouter.post('/create', createStoreHandler);

module.exports = storeRouter;
