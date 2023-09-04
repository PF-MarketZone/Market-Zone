const {
  findAllOrders,
  findOrderById,
} = require('../controllers/orderController');
const { responseMaper } = require('../helpers/responseMaper');
//======================================================
// Busca todas las ordenes en la BDD
//======================================================

const getAllOrdersHandler = async (req, res) => {
  try {
    const result = await findAllOrders();
    res
      .status(200)
      .json(responseMaper(false, 'Aqui estan todas las ordenes', result));
  } catch (error) {
    res
      .status(500)
      .json(responseMaper(true, 'Error al Buscar las ordenes', null));
  }
};

//=====================================================
// Busca ordenes por ID
//=====================================================

const getOrderByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await findOrderById(id);
    // console.log(result);
    res
      .status(200)
      .json(
        responseMaper(
          false,
          `Esta es la orden encontrada bajo el id: ${id}`,
          result
        )
      );
  } catch (error) {
    res.status(500).json(responseMaper(true, 'Error al Buscar la orden', null));
  }
};

module.exports = {
  getAllOrdersHandler,
  getOrderByIdHandler,
};
