const mercadopago = require('mercadopago');
const { createPreference } = require('../controllers/paymentController');
const { responseMaper } = require('../helpers/responseMaper');
// const Product = require('../models/product');
const { updateStock } = require('../controllers/productController');

const handleCreateOrder = async (req, res) => {
  try {
    // console.log(req.body);
    const result = await createPreference(req.body);
    res
      .status(200)
      .json(responseMaper(false, 'Creando orden de compra', result));
  } catch (error) {
    res.status(500).json(responseMaper(true, 'Error al crear la orden'));
  }
};

const handleSuccess = (req, res) => {
  res.status(200).send('Pago aprobado. ¡Gracias por tu compra!');
};

const handlePending = (req, res) => {
  res.status(200).send('Pago pendiente. En espera de confirmación.');
};

const handleFailure = (req, res) => {
  res.status(200).send('Pago fallido. Por favor, intenta nuevamente.');
};

//=======================================================
// Handle

const handleNotification = async (req, res) => {
  console.log('\x1b[32m%s\x1b[0m', 'notificacion de compra');
  try {
    const { query } = req;
    // const { params } = req;
    // console.log({ query });
    const topic = query.topic || query.type;
    // console.log({ topic });
    switch (topic) {
      case 'payment':
        const paymentId = query.id || query['data.id'];
        // console.log(topic, 'payment obtenido', paymentId);
        const payment = await mercadopago.payment.findById(paymentId);
        // console.log(payment.body.order);
        const { id } = payment.body.order;
        var { body } = await mercadopago.merchant_orders.findById(id);
        // console.log({ body });
        break;
      case 'merchant_order':
        const orderId = query.id;
        var { body } = await mercadopago.merchant_orders.findById(orderId);
        break;
    }

    // console.log(body);

    var paidAmount = 0;

    body.payments.forEach((payment) => {
      if (payment.status === 'approved') {
        paidAmount = paidAmount + payment.transaction_amount;
      }
    });

    //==================================================================
    // Enviar notificacion / descontar stock
    //==================================================================

    if (paidAmount >= body.total_amount) {
      console.log('\x1b[32m%s\x1b[0m', 'El pago se completo');
      // console.log(body); // Para el envio de notificaciones acceder a "body.status": "closed" = venta concretada

      //========================
      // Descuento de stock
      //========================

      body.items.map((item) => {
        console.log(item);
        // updateStock(item.id, item.quantity);
      });

      //=========================
      // Notificacion
      //========================
    } else {
      console.log('\x1b[32m%s\x1b[0m', 'El pago NO se completo');
    }

    res.status(200).send();
  } catch (error) {
    res.status(500).send();
  }
};

module.exports = {
  handleCreateOrder,
  handleSuccess,
  handlePending,
  handleFailure,
  handleNotification,
};
