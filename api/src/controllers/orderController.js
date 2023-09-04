const Order = require('../models/order');

//===============================================
// Busca y trae todas las ordenes en la BDD
//===============================================

const findAllOrders = async () => {
  const orders = await Order.find();
  return orders;
};

//===============================================
// Busca y trae la orden con el id recibido en la BDD
//===============================================

const findOrderById = async (id) => {
  const order = await Order.findById(id);
  return order;
};

module.exports = {
  findAllOrders,
  findOrderById,
};
