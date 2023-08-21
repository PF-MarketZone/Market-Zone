require('dotenv').config();
const { MONGO_URI_LOCAL, MONGO_URI_REMOTE } = process.env;

var mongoose = require('mongoose');
async function connectToDatabase() {
  await mongoose
    .connect(MONGO_URI_LOCAL)
    .then(() => console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online'))
    .catch((e) => console.log('Error de conexion ', e));
}

module.exports = connectToDatabase;
