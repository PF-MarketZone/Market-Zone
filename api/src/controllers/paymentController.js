const { ACCESS_TOKEN_MP, DOMAIN_NAME_FRONT } = process.env;
const mercadopago = require('mercadopago');

const createPreference = async (req, res) => {
  mercadopago.configure({
    access_token: ACCESS_TOKEN_MP,
  });
  try {
    const preference = {
      items: req.body.items.map((item) => ({
        title: item.title,
        unit_price: item.unit_price,
        quantity: item.quantity,
      })),
      back_urls: {
        success: `${DOMAIN_NAME_FRONT}/thankyou`,
        failure: `${DOMAIN_NAME_FRONT}/cart`,
        pending: `${DOMAIN_NAME_FRONT}/cart`,
      },
      auto_return: 'approved',
    };
    const response = await mercadopago.preferences.create(preference);
    res.json({
      id: response.body.id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'An error occurred while creating preference.',
    });
  }
};
module.exports = { createPreference };
