const { ACCESS_TOKEN_MP, NGROK_ACCESS, DOMAIN_NAME_FRONT } = process.env;
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
    notification_url: `https://market-zone-api-v1.onrender.com/api/v1/create-order/notification`,
    back_urls: {
      success: `${DOMAIN_NAME_FRONT}/thankyou`, // crear componente para compra exitosa (componente del front, para mas estilo)
      failure: `${DOMAIN_NAME_FRONT}/cart`,
      pending: `${DOMAIN_NAME_FRONT}/cart`,
    },
    auto_return: 'approved',
  };

  const response = await mercadopago.preferences.create(preference);
  // console.log(response);

  const id = response.body.id;
  return id;
};
module.exports = { createPreference };
