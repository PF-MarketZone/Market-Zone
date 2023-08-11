require('dotenv').config();
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { PORT_SERVER } = process.env || 3004;

// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
  server.listen(PORT_SERVER, () => {
    console.log(`Sever raised on port: ${PORT_SERVER}. Enjoy It!`); // eslint-disable-line no-console
  });
});

