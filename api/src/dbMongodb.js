require('dotenv').config();
var mongoose = require('mongoose');
async function connectToDatabase() {
  await mongoose
    .connect('mongodb+srv://MarketZone:ZoneMarket@cluster0.fyv03ie.mongodb.net/mz_store')
    .then(() => console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online'))
    .catch((e) => console.log('Error de conexion ', e));
}

module.exports = { connectToDatabase };
