const Order = require('../models/order');
const User = require('../models/Users');
const Sale = require('../models/sales');
const Products = require('../models/product');
const Store = require('../models/sales');
const { sendMail } = require('./emailController');
const { EMAIL } = process.env;

const {
  emailOkOrderVendedor,
  emailRejectedOrderComprador,
} = require('../helpers/emailData');

const createOrder = async (orderInfo, user) => {
  const productIds = orderInfo.additional_info.items.map((i) => i.id);

  // console.log(orderInfo.additional_info.items)
  const order = new Order({
    user,
    products: productIds,
    totalPrice: orderInfo.transaction_details.total_paid_amount,
    paymentMethod: orderInfo.payment_type_id,
    transactionDate: orderInfo.date_approved,
    transactionStatus: orderInfo.status,
  });

  await order.save();
  // console.log(order);
  return order;
};

const createSale = async (orderInfo, user) => {
  // console.log({ orderInfo });
  // console.log({ user });
  const productIds = orderInfo.additional_info.items.map((i) => i.id);
  // console.log({ productIds });
  const products = await Products.find({ _id: { $in: productIds } });
  // console.log({ dateStr });

  const storeIds = products.map((product) => product.storeId);
  // console.log({ storeIds });
  // //----xx----//
  const usuario = await User.findOne({ _id: user });
  // console.log({ usuario });
  const userCity = usuario.address.city;
  // // console.log({ userCity });
  const sale = await new Sale({
    userId: usuario._id, //saco de resp login
    storeId: storeIds,
    date: orderInfo.date_approved, //saco de resp mp
    totalAmount: orderInfo.transaction_details.total_paid_amount, //saco de resp mp
    productIds: productIds, //saco de resp mp
    storeIds: storeIds, //lo saco de los products,
    city: userCity, //saco de products-->user-->city
  });
  // console.log({ sale });
  await sale.save();
  return sale;
};

//EMAIL al comprador --->Ok venta
const sendConfirmationEmailBuyer = async (order) => {
  // console.log({ order });
  const userId = order.user; //id del comprador
  const user = await User.findById(userId); //traigo la info del comprador para luego hacer uso de la misma ene l envio dle email
  if (!user) {
    throw new Error('Usuario no encontrado');
  }
  //  id de los productos de la orden
  const productIds = order.products;
  // Busca los productos en la bdd x id
  const products = await Products.find({ _id: { $in: productIds } });
  const emailData = {
    from: `"Equipo de MarketZone" <${EMAIL}>`,
    to: `${user.email}`,
    subject: 'Confirmación de Orden',
    html: `
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Confirmación de Orden</title>
          </head>
          <body>
              <p>Hola <strong>${user.name}</strong>,</p>
              <p>Tu orden ha sido aprobada con éxito. A continuación, te proporcionamos los detalles de la orden:</p>

              <table border="1">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${products
                    .map(
                      (product) => `
                    <tr>
                      <td>${product.name}</td>
                    </tr>
                  `
                    )
                    .join('')}
                </tbody>
              </table>

              <p>Total de la orden: $${order.totalPrice}</p>
              <p>Método de pago: ${order.paymentMethod}</p>
              <p>Fecha de transacción: ${order.transactionDate}</p>

              <p>Gracias por tu compra en MarketZone. Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos.</p>

              <p>Atentamente,<br>El equipo de MarketZone</p>
          </body>
          </html>
        `,
  };
  const infoMail = await sendMail(emailData); //envio el email pasandole el componente del cuerpo dle email, al que le paso la info de la order y del user.
  // console.log(infoMail);
  return infoMail;
};
//EMAIL al vendedor((hay que llegar de idProduct a user.email!!!)) --->Ok venta

const userSeller = async (productsIds) => {};
const storeName = async (productsIds) => {
  // Busco los productos en la bdd por id
  const products = await Products.find({ _id: { $in: productsIds } });
  // saco losid de las tiendas de los productos
  const storeIds = products.map((product) => product.storeId);
  // Busco las tiendas en la bdd x id
  const stores = await Store.find({ _id: { $in: storeIds } });
  const storeNames = stores.map((store) => store.name);
  return storeNames;
};

const sendConfirmationEmailSeller = async (order) => {
  const productsId = order.products.id;
  const storeNames = storeName(productsId);
  const sellers = await userSeller(productsId);
  const emailData = {
    from: `"Equipo de MarketZone" <${EMAIL}>`,
    to: `${user.email}`,
    subject: 'Confirmación de Orden',
    html: `
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Confirmación de Orden</title>
          </head>
          <body>
              <p>Hola <strong>${user.name}</strong>,</p>
              <p>Tu orden ha sido aprobada con éxito. A continuación, te proporcionamos los detalles de la orden:</p>

              <table border="1">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${products
                    .map(
                      (product) => `
                    <tr>
                      <td>${product.name}</td>
                    </tr>
                  `
                    )
                    .join('')}
                </tbody>
              </table>

              <p>Total de la orden: $${order.totalPrice}</p>
              <p>Método de pago: ${order.paymentMethod}</p>
              <p>Fecha de transacción: ${order.transactionDate}</p>

              <p>Gracias por tu compra en MarketZone. Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos.</p>

              <p>Atentamente,<br>El equipo de MarketZone</p>
          </body>
          </html>
        `,
  };
  const infoMail = await sendMail(emailData);
  console.log(infoMail);
  return infoMail;
};
//EMAIL al comprador ---> Venta rechazada
const sendRejectedEmailBuyer = async (order) => {
  const userId = order.user;
  const user = await User.findById(userId);
  if (!user) {
    throw new Error('Usuario no encontrado');
  }
  const productIds = order.products;

  const products = await Products.find({ _id: { $in: productIds } });
  const emailData = {
    from: `"Equipo de MarketZone" <${EMAIL}>`,
    to: `${user.email}`,
    subject: 'Confirmación de Orden',
    html: `
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Confirmación de Orden</title>
          </head>
          <body>
              <p>Hola <strong>${user.name}</strong>,</p>
              <p>Tu orden ha sido aprobada con éxito. A continuación, te proporcionamos los detalles de la orden:</p>

              <table border="1">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${products
                    .map(
                      (product) => `
                    <tr>
                      <td>${product.name}</td>
                    </tr>
                  `
                    )
                    .join('')}
                </tbody>
              </table>

              <p>Total de la orden: $${order.totalPrice}</p>
              <p>Método de pago: ${order.paymentMethod}</p>
              <p>Fecha de transacción: ${order.transactionDate}</p>

              <p>Gracias por tu compra en MarketZone. Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos.</p>

              <p>Atentamente,<br>El equipo de MarketZone</p>
          </body>
          </html>
        `,
  };
  const infoMail = await sendMail(emailData);
  return infoMail;
};

module.exports = {
  createOrder,
  createSale,
  sendConfirmationEmailBuyer,
  sendConfirmationEmailSeller,
  sendRejectedEmailBuyer,
};
