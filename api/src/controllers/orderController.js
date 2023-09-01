const Order = require('../models/order');
const User = require('../models/Users');
const Sale =require('../models/sales')
const Product = require('./models/Product');
const { sendMail } = require('./emailController');
// Supongamos que tienes el userId para una venta
const userId = 'userID';

// Carga el usuario correspondiente desde la base de datos
const user = await User.findOne({ _id: userId });

// Ahora, puedes acceder al campo city del usuario
const userCity = user.city;

// userCity contiene la ciudad del usuario que realizó la compra



const createOrder = async (orderInfo) => {
   
  };
  
  const createSale = async (saleInfo) => {
  const products = await Product.find({ _id: { $in: saleInfo.productIds } }); 
  const storeIds = products.map((product) => product.storeId);
  const user = await User.findOne({ _id: saleInfo.userId });
  const userCity = user.address.city;
    const sale = new Sale({
      userId: saleInfo.userId, //saco de resp mp
      date: saleInfo.date, //saco de resp mp
      amount: saleInfo.amount, //saco de resp mp
      productIds: saleInfo.productIds,//saco de resp mp
      storeIds: storeIds,//lo saco de los products,
      city: userCity,
    });
    await sale.save();
  };



module.exports= {
    createOrder,
    createSale
}