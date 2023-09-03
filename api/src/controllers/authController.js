require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/Users.js');
const Roles = require('../models/Roles.js');

const { JWT_SECRET, JWT_REFRESH, EMAIL, JWT_SECRET_RECOVERY, DOMAIN_NAME } =
  process.env;
const boom = require('@hapi/boom');
const { sendMail } = require('./emailController.js');
const bcryptjs = require('bcryptjs');

//firma del token
const singIn = async (req, res, next) => {
  try {
    const user = req.user;

    const roles = await Roles.find({ _id: { $in: user.role } });
    const rolesName = roles.map((rol) => rol.name);

    const payload = {
      sub: user['_id'],
      role: rolesName,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: 900 });
    const refreshToken = jwt.sign(payload, JWT_REFRESH, { expiresIn: 1200 });

    res.json({
      user,
      token,
      refreshToken,
    });
  } catch (error) {
    next(error);
  }
};
const userUpdate = async (id, changes) => {
  try {
    const user = await User.findOne({ _id: id });
    const rta = await user.updateOne(changes);
    console.log('USUARIO', user);
    return rta;
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    throw error;
  }
};

const recoveryPassword = async (email) => {
  const userFound = await User.findOne({ email: email });
  console.log(userFound._id);
  // console.log("auth controller:", userFound.email);
  if (!userFound) {
    throw boom.unauthorized('Usuario no encontrado');
  }
  const payload = { sub: userFound['_id'] };

  const token = jwt.sign(payload, JWT_SECRET_RECOVERY, { expiresIn: '15min' }); // generar un nuevo jwtsecret para recuperar pass
  const link = `${DOMAIN_NAME}/recovery?token=${token}`;
  await userUpdate(userFound._id, { recoveryToken: token });

  const emailData = {
    from: `"Equipo de MarketZone" <${EMAIL}>`, // sender address
    to: `${userFound.email}`, // list of receivers
    subject: 'Recupera tu contraseña', // Subject line
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
    `, // html body
  };
  const infoMail = await sendMail(emailData);

  return infoMail;
};

const changePassword = async (token, newPassword) => {
  try {
    //verificar token, para que retorne su payload si sale bien
    const payload = jwt.verify(token, JWT_SECRET_RECOVERY);
    const user = await User.findById(payload.sub);
    if (user.recoveryToken !== token) {
      throw boom.unauthorized();
    }
    const hash = await bcryptjs.hash(newPassword, 10);
    await userUpdate(user._id, { recoveryToken: null, password: hash });

    return { message: 'password changed' };
  } catch (error) {
    throw boom.unauthorized();
  }
};

module.exports = {
  singIn,
  recoveryPassword,
  changePassword,
};
