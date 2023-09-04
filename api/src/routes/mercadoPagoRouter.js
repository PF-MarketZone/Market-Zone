const { Router } = require('express');
const {
  handleSuccess,
  handlePending,
  handleFailure,
  handleCreateOrder,
  handleNotification,
} = require('../handlers/postPaymentHandler');

const mercadoPagoRouter = Router();

mercadoPagoRouter.post('/create-preference', handleCreateOrder);
mercadoPagoRouter.get('/success', handleSuccess);
mercadoPagoRouter.get('/pending', handlePending);
mercadoPagoRouter.get('/failure', handleFailure);
mercadoPagoRouter.post('/notification', handleNotification);

module.exports = mercadoPagoRouter;
