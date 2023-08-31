const { EMAIL} = process.env;
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
  const emailOkOrderComprador =()=> {

  };

  //Vendedor--vv
  const emailOkOrderVendedor =()=> {

  };

  //En caso de compra NO exitosa

  //Comprador--VV
  const emailFailedOrderComprador =()=> {

  };


  module.exports = {
    emailRecovery,
    emailOkOrderComprador,
    emailOkOrderVendedor,
    emailFailedOrderComprador
  }