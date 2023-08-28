require('dotenv').config();
const { MONGO_URI_LOCAL, MONGO_URI_REMOTE, NODE_ENV } = process.env;

const MONGO_URI = NODE_ENV === 'prod' ? MONGO_URI_REMOTE : MONGO_URI_LOCAL

const mongoose = require('mongoose');

async function connectToDatabase() {
  await mongoose
    .connect(MONGO_URI)

    .then(() => console.log('Base de datos: ', 'online'))
    .catch((e) => console.log('Error de conexion ', e));
}
module.exports = connectToDatabase;
