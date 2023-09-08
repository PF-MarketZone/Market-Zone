require('dotenv').config();
const { EMAIL } = process.env;
//Aqui van los cuerpos de los emails a enviar, en diferentes casos---vv



//---Recuerar contraseña---

    const emailRecovery = (userFound, link) => {
        return {
    from: `"Equipo de MarketZone" <${EMAIL}>`, 
    to:`${userFound.email}`,
    subject: "Recupera tu contraseña", 
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Recuperación de Contraseña</title>
    </head>
    <body>
        <p>Hola <strong>${userFound.name}</strong>,</p>
        <p>Hemos recibido una solicitud para recuperar la contraseña de tu cuenta. Si no has realizado esta solicitud, puedes ignorar este correo.</p>
        <p>Si deseas restablecer tu contraseña, haz clic en el botón de abajo:</p>
        
        <table cellspacing="0" cellpadding="0">
        <tr>
            <td style="border-radius: 3px; text-align: center;">
                <a href="${link}" style="background-color: #40C057; color: #fff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.4; text-align: center; text-decoration: none; display: inline-block; padding: 8px 16px; border-radius: 5px; font-weight: bold;">Restablecer Contraseña</a>
            </td>
        </tr>
    </table>
    
        <p>Si el botón no funciona, también puedes copiar y pegar el siguiente enlace en tu navegador:</p>
        <p>${link}</p>
        
        <p>Gracias,<br>El equipo de Market Zone</p>
    </body>
    </html>
    `,
  };
    };

  //----Envio Compra Exitosa ----

  //Comprador--vv
  const emailOkOrderComprador =async( user, products, order) => {
     
    return {
      from: `"Equipo de MarketZone" <${EMAIL}>`,
      to: user.email,
      subject: "Confirmación de Orden",
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
                ${products.map((product) => `
                  <tr>
                    <td>${product.name}</td>
                      <td>${product.quantity}</td>
                    <td>${product.unit_price}</td>
                     <td>${product.quantity * product.unit_price}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
  
            <p>Total de la orden: $${order.totalPrice}</p>
            <p>Método de pago: ${order.paymentMethod}</p>
            <p>Fecha de transacción: ${order.transactionDate}</p>
  
            <p>Gracias por tu compra en MarketZone. Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos.</p>
            
            <p>Atentamente,<br>El equipo de MarketZone</p>
        </body>
        </html>
      `,}
    };

  //Vendedor--vv
  const emailOkOrderVendedor = async (sellers, order, storeName) => {
    // Obtén los nombres de los vendedores o el nombre del equipo de la tienda
    
    return {
      from: `"Equipo de MarketZone" <${EMAIL}>`,
      to: sellers.map((seller) => seller.email).join(','), //correos de vendedor/es
      subject: "Nueva Orden Confirmada",
      html: `
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Confirmación de Nueva Orden</title>
        </head>
        <body>
            <p>Hola ${storeName},</p>
            <p>Se ha confirmado una nueva orden en tu tienda. A continuación, te proporcionamos los detalles de la orden:</p>
            
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
                ${order.products.map((product) => `
                  <tr>
                    <td>${product.name}</td>
                    <td>${product.quantity}</td>
                    <td>${product.unit_price}</td>
                    <td>${product.quantity * product.unit_price}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
  
            <p>Total de la orden: $${order.totalPrice}</p>
            <p>Método de pago: ${order.paymentMethod}</p>
            <p>Fecha de transacción: ${order.transactionDate}</p>
  
            <p>Si tienes alguna pregunta o necesitas más información sobre esta orden, no dudes en contactarnos.</p>
            
            <p>Atentamente,<br>El equipo de MarketZone</p>
        </body>
        </html>
      `,
    };
  };
  
  //En caso de compra NO exitosa

  //Comprador--VV
  const emailRejectedOrderComprador =(user, products, order)=> {
    return {
      from: `"Equipo de MarketZone" <${EMAIL}>`,
      to: user.email,
      subject: "Venta Rechazada",
      html: `
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Venta Rechazada</title>
        </head>
        <body>
            <p>Hola <strong>${user.name}</strong>,</p>
            <p>Lamentablemente, tu venta ha sido rechazada. A continuación, te proporcionamos los detalles de la venta:</p>
            
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
                ${products.map((product) => `
                  <tr>
                    <td>${product.name}</td>
                    <td>${product.quantity}</td>
                    <td>${product.unit_price}</td>
                    <td>${product.quantity * product.unit_price}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
  
            <p>Total de la venta: $${order.totalPrice}</p>
            <p>Método de pago: ${order.paymentMethod}</p>
            <p>Fecha de transacción: ${order.transactionDate}</p>
  
            <p>Lamentamos los inconvenientes causados. Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.</p>
            
            <p>Atentamente,<br>El equipo de MarketZone</p>
        </body>
        </html>
      `,
    };
  };


  module.exports = {
    emailRecovery,
    emailOkOrderComprador,
    emailOkOrderVendedor,
    emailRejectedOrderComprador
  }
  