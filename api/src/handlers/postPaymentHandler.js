const mercadopago = require('mercadopago');
const { createPreference } = require('../controllers/paymentController');
const { responseMaper } = require('../helpers/responseMaper');
// const Product = require('../models/product');
const { updateStock } = require('../controllers/productController');
const {
  createOrder,
  createSale,
  // sendConfirmationEmailBuyer,
  // sendConfirmationEmailSeller,
  sendRejectedEmailBuyer,
} = require('../controllers/orderResponseController.js');
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
  // res.status(200).send('ok');
  console.log('\x1b[32m%s\x1b[0m', 'notificacion de compra');
  try {
    const { query } = req;
    const { params } = req;
     //console.log({ params });
    const topic = query.topic || query.type;
    // console.log({ topic });
    var merchantOrder;
    switch (topic) {
      case 'payment':
        const paymentId = query.id || query['data.id'];
        // console.log(topic, 'payment obtenido', paymentId);
        const payment = await mercadopago.payment.findById(paymentId);
        // console.log(JSON.stringify(payment));
        merchantOrder = payment;

        const { id } = payment.body.order;
        var { body } = await mercadopago.merchant_orders.findById(id);
        // console.log({ body });
        break;
      case 'merchant_order':
        const orderId = query.id;
        var { body } = await mercadopago.merchant_orders.findById(orderId);
        break;
    }

    // console.log(JSON.stringify(body));

    var paidAmount = 0;
    var canContinue = false;
    body.payments.forEach((payment) => {
      if (payment.status === 'approved') {
        canContinue = true;
        paidAmount = paidAmount + payment.transaction_amount;
      }
    });

    //==================================================================
    // Enviar notificacion / descontar stock
    //==================================================================

    if (canContinue) {
      if (paidAmount >= body.total_amount) {
        console.log('\x1b[32m%s\x1b[0m', 'El pago se completo');
        // console.log(body); // Para el envio de notificaciones acceder a "body.status": "closed" = venta concretada

        //========================
        // Descuento de stock
        //========================

        body.items.forEach(async (item) => {
          // console.log(item.quantity);
          await updateStock(item.id, item.quantity);
        });

        //=========================
        // Notificacion
        //========================
         
        
         const mOrder= JSON.stringify(merchantOrder.body);
         const resOrder = JSON.parse(mOrder)
         //console.log(resOrder)
         //console.log({ params });
         const user= params.id

        //Crear Order-----v
        const order = await createOrder(resOrder, user );

        // console.log({order});
        // // //Crear Sale-----v
         await createSale(resOrder, user );
        // //SendMail(comprador)---v
        if (order) {
          await sendConfirmationEmailBuyer(order);
          //SendMail(vendedor)----v
          await sendConfirmationEmailSeller(order);
        } else {
          throw Error('No se ha creado una Orden');
        }
      } else {
        console.log('\x1b[32m%s\x1b[0m', 'El pago NO se completo');
        //=========================
        // Notificacion
        //========================
        //crear Order-----v
        const order = await createOrder(merchantOrder);
        //SendMail(comprador)----V
        if (order) {
          await sendRejectedEmailBuyer();
        }
        {
          throw Error('No se ha creado una Orden');
        }
      }

      res.status(200).send('ok');
    }
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
