const { Router } = require('express');
const {
  getProductHandler,
  getProductByIdHandler,
  getDeleteProduct,
} = require('../handlers/getProductHandler');
const {
  createProductHandler,
  updateProductHandler,
  updateStockProductHandler,
} = require('../handlers/postProductHandler');
const { putDeletedHandler} =require('../handlers/putProductHandler')
const passport = require('passport');
// const { checkRoles } = require('../middlewares/checkSellerRole');
// const { verifyToken } = require('../middlewares/verifyToken');

const productRouter = Router();

productRouter.get('/', getProductHandler);
productRouter.get('/:id', getProductByIdHandler);
productRouter.delete('/remove/:id', getDeleteProduct);

productRouter.post(
  '/createproduct',
  // verifyToken,
  // passport.authenticate('jwt', { session: false }),
  // checkRoles('admin', 'seller'),
  createProductHandler
);
productRouter.post('/update', updateProductHandler);
productRouter.put('/:id', putDeletedHandler );

productRouter.put('/update-stock', updateStockProductHandler);

module.exports = productRouter;
