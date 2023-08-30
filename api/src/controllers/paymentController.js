const { ACCESS_TOKEN_MP } = process.env;
// SDK Mercado Pago
const mercadopago = require('mercadopago');

const createPreference = async (req) => {
  const itemsList = req.items;
  mercadopago.configure({
    access_token: ACCESS_TOKEN_MP, // acces token del vendedor
  });
  // Credenciales
  const preference = {
    items: itemsList.map((item) => ({
      id: item.id,
      title: item.title,
      unit_price: item.unit_price,
      quantity: item.quantity,
    })),
    notification_url: `https://df8a-190-176-33-166.ngrok.io/api/v1/create-order/noification/`,
    back_urls: {
      success: 'http://localhost:3004/api/v1/create-order/success', // crear componente para compra exitosa
      failure: 'http://localhost:5173/cart',
      pending: 'http://localhost:5173/cart',
    },
    auto_return: 'approved',
  };

  const response = await mercadopago.preferences.create(preference);

  const id = response.body.id;
  return id;
};
module.exports = { createPreference };
