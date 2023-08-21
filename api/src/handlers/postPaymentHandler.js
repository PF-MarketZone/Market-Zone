const { paymentController } = require('../controllers/paymentController');
const { responseMaper } = require('../helpers/responseMaper');

const createOrderLink = async (req, res) => {
  const data = req.body;
  try {
    const payment = await paymentController(data);
    res.status(200).json(responseMaper(false, 'Orden creada', payment));
  } catch (error) {
    res
      .status(500)
      .json(responseMaper(true, 'No se pudo realizar lo operacion', null));
  }
};

module.exports = { createOrderLink };
