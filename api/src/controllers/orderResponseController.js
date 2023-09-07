const Order = require('../models/order');
const User = require('../models/Users');
const Sale =require('../models/sales')
const Products = require('../models/product');
const Store =require('../models/sales')
const { sendMail } = require('./emailController');

const {emailOkOrderComprador,
  emailOkOrderVendedor,
  emailRejectedOrderComprador
} = require('../helpers/emailData')



const createOrder = async (orderInfo) => {
  const order = new Order({
    user: orderInfo.payer.id,
    products: orderInfo.items.map((i)=>{i.id}),
    totalPrice: orderInfo.totalPrice,
    paymentMethod: orderInfo.paymentMethod,
    transactionDate: orderInfo.transactionDate,
    transactionStatus:orderInfo.transactionStatus,
  });

  await order.save();

  return order;
  };
  
  const createSale = async (saleInfo) => {
  const products = await Products.find({ _id: { $in: saleInfo.productIds } }); 
  const storeIds = products.map((product) => product.storeId);
  //----xx----//
  const user = await User.findOne({ _id: saleInfo.userId });
  const userCity = user.address.city;
    const sale = new Sale({
      userId: saleInfo.userId, //saco de resp mp
      date: saleInfo.date, //saco de resp mp
      amount: saleInfo.amount, //saco de resp mp
      productIds: saleInfo.productIds,//saco de resp mp
      storeIds: storeIds,//lo saco de los products,
      city: userCity,//saco de products-->user-->city
    });
    await sale.save();
  };

  //EMAIL al comprador --->Ok venta
  const sendConfirmationEmailBuyer= async ( order)=>{
    const userId = order.user; //id del comprador
    const user = await User.findById(userId);//traigo la info del comprador para luego hacer uso de la misma ene l envio dle email
    if (!user) {
      throw new Error('Usuario no encontrado');
    };
    //  id de los productos de la orden
    const productIds = order.products;
    // Busca los productos en la bdd x id
    const products = await Products.find({ _id: { $in: productIds } });


    const infoMail = await sendMail(emailOkOrderComprador(user, products, order));//envio el email pasandole el componente del cuerpo dle email, al que le paso la info de la order y del user.
    return infoMail;
    
  };
   //EMAIL al vendedor((hay que llegar de idProduct a user.email!!!)) --->Ok venta

   const userSeller= async (productsIds)=>{
   
    // Busco los productos en la bdd por id
        const products = await Products.find({ _id: { $in: productsIds } });
    // saco losid de las tiendas de los productos
        const storeIds = products.map((product) => product.storeId);
         // Busco las tiendas en la bdd x id
        const stores = await Store.find({ _id: { $in: storeIds } });
        // Saco los id de los usuarios vendedores de las store
        const sellerUserIds = stores.map((store) => store.user);
        // Busco los usuarios vendedores en la bdd usando los id
        const sellerUsers = await User.find({ _id: { $in: sellerUserIds } });
        return sellerUsers;

   };
   const storeName = async(productsIds)=>{
    // Busco los productos en la bdd por id
    const products = await Products.find({ _id: { $in: productsIds } });
    // saco losid de las tiendas de los productos
        const storeIds = products.map((product) => product.storeId);
         // Busco las tiendas en la bdd x id
        const stores = await Store.find({ _id: { $in: storeIds } });
        const storeNames = stores.map((store) => store.name);
    return storeNames;
   }
   const sendConfirmationEmailSeller= async (order)=>{
    
        const productsId = order.products.id;
        const storeNames= storeName(productsId)
        const sellers = await userSeller(productsId);
        const infoMail = await sendMail(emailOkOrderVendedor(sellers, order, storeNames));
        return infoMail;
         
     
  };
   //EMAIL al comprador ---> Venta rechazada
   const sendRejectedEmailBuyer= async (order)=>{
    const userId = order.user; 
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('Usuario no encontrado');
    };
    const productIds = order.products;
   
    const products = await Products.find({ _id: { $in: productIds } });


    const infoMail = await sendMail(emailRejectedOrderComprador(user, products, order));
    return infoMail;
    
  };
  


module.exports= {
    createOrder,
    createSale,
    sendConfirmationEmailBuyer,
    sendConfirmationEmailSeller,
    sendRejectedEmailBuyer

}