const nodemailer = require('nodemailer');
require('dotenv').config();
const { EMAIL, PASSWORD } = process.env;

const sendMail = async (info) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true, // true for 465, false for other ports
    port: 465,
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
    //desactivamos mientras este en entorno de desarrollo e ingresemos por http, sin certificado SSL, sno no funciona con gmail
    tls: {
      rejectUnauthorized: false,
    },
  });
  // console.log({ transporter });
  try {
    const result = await transporter.sendMail(info);
    console.log('SendMail result:', result); // Agregar un console.log para ver el resultado del envío
    return { message: `Mail sent to ${info.to} ` };
  } catch (error) {
    console.log('SendMail error:', error); // Agregar un console.log para ver el error en caso de falla
    throw error; // Re-lanza el error para manejarlo en otro lugar si es necesario
  }
};

module.exports = { sendMail };
