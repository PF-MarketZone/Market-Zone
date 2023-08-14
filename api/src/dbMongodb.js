require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const { MONGO_URI } = process.env;

const url = MONGO_URI;

const dbName = 'mz_store';

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to the database');
    return client.db(dbName);
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

module.exports = { connectToDatabase };
