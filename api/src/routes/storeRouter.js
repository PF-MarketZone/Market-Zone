const { Router } = require('express');
// const { getAllStore } = require('../handlers/getStore');

const storeRouter = Router();

storeRouter.get('/all', (req, res) => {
  res.status(200).send('endpoint /store/all');
  //   console.log('StoreRouter funcionando');
});

module.exports = storeRouter;
