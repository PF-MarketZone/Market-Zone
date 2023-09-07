const { Router } = require('express');
const {
  getAllOrdersHandler,
  getOrderByIdHandler,
} = require('../handlers/getOrderHandler');

const orderRouter = Router();

orderRouter.get('/', getAllOrdersHandler);
orderRouter.get('/:id', getOrderByIdHandler);

module.exports = orderRouter;
