require('dotenv').config();
const server = require('./src/app.js');
const { connectToDatabase } = require('./src/dbMongodb.js');
const port = process.env.PORT_SERVER || 3004;

async function startServer() {
  try {
    await connectToDatabase();

    server.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
}

startServer();
