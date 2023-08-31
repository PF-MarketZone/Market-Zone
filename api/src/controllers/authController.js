require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/Users.js');
const Roles = require('../models/Roles.js');

const { JWT_SECRET, EMAIL , JWT_SECRET_RECOVERY} = process.env;
const boom = require('@hapi/boom');
const {sendMail} = require('./emailController.js')
const bcryptjs = require('bcryptjs');
const emailRecovery = require('../helpers/emailData')



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
console.log("USUARIO", user)
    return rta;
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    throw error;
  }
};

const recoveryPassword = async (email)=>{
  const userFound = await User.findOne({ email: email });
  console.log(userFound._id)
 // console.log("auth controller:", userFound.email);
  if (!userFound) {
    throw boom.unauthorized('Usuario no encontrado');
  };
  const payload = { sub: userFound['_id'] };
  const token = jwt.sign(payload, JWT_SECRET_RECOVERY, {expiresIn: '15min'}); // generar un nuevo jwtsecret para recuperar pass
  const link = `http://localhost:3004/recovery?token=${token}`
  await userUpdate(userFound._id, {recoveryToken: token});
  
  
  const infoMail = await sendMail(userFound, link, emailRecovery);
  return infoMail;
  
};

const changePassword = async(token, newPassword)=>{
try {
  //verificar token, para que retorne su payload si sale bien
const payload = jwt.verify(token, JWT_SECRET_RECOVERY);
const user = await User.findById(payload.sub);
if (user.recoveryToken!== token){
  throw boom.unauthorized( );
}
const hash = await bcryptjs.hash(newPassword, 10);
await userUpdate(user._id, {recoveryToken: null, password: hash});

return { message: 'password changed' };
} catch (error) {
  throw boom.unauthorized( );
}
};



module.exports = { 
    singIn,
   recoveryPassword,
    changePassword
  };
