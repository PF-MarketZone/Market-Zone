const { Router } = require('express');
const {
  getProductHandler,
  getProductByIdHandler,
  getDeleteProduct,
} = require('../handlers/getProductHandler');
const {
  createProductHandler,
  updateProductHandler,
} = require('../handlers/postProductHandler');

const productRouter = Router();

productRouter.get('/', getProductHandler);
productRouter.get('/:id', getProductByIdHandler);
productRouter.get('/remove/:id', getDeleteProduct);
productRouter.post('/createproduct', createProductHandler);
productRouter.post('/update', updateProductHandler);

module.exports = productRouter;
