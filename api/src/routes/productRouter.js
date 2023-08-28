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
const {putDeletedHandler} =require('../handlers/putProductHandler')
const passport = require('passport');
const { checkRoles } = require('../middlewares/checkSellerRole');

const productRouter = Router();

productRouter.get('/', getProductHandler);
productRouter.get('/:id', getProductByIdHandler);

productRouter.get('/remove/:id', getDeleteProduct);

productRouter.post(
  '/createproduct',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'seller'),
  createProductHandler
);
productRouter.post('/update', updateProductHandler);
productRouter.put('/:id', putDeletedHandler );

module.exports = productRouter;
