const { Router } = require('express');
const {
  getProductHandler,
  getProductByIdHandler,
} = require('../handlers/getProductHandler');
const { createProductHandler } = require('../handlers/postProductHandler');

const productRouter = Router();

productRouter.get('/', getProductHandler);
productRouter.get('/:id', getProductByIdHandler);
productRouter.post('/createproduct', createProductHandler);

module.exports = productRouter;
