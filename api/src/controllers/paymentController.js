const { ACCESS_TOKEN_MP } = process.env;
const mercadopago = require('mercadopago');

const paymentController = async (data) => {
  mercadopago.configure({
    // Aqui deberia ir el access token del vendedor
    access_token: ACCESS_TOKEN_MP,
  });

  const body = await mercadopago.preferences.create({
    // array de objetos donde llegan los itmes del carrito..
    items: [
      {
        title: 'Producto de prueba',
        quantity: 1,
        currency_id: 'ARS',
        unit_price: 150,
      },
      {
        title: 'Producto de prueba 2',
        quantity: 1,
        currency_id: 'ARS',
        unit_price: 300,
      },
    ],
    back_urls: {},
  });
  console.log(body);
  return body;
};

module.exports = { paymentController };
