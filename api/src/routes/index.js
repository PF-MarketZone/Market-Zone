const { Router } = require('express');
// const userRouter = require('');

// const storeRouter = require('./storeRouter');
// const productRouter = require('./productRouter');

const router = Router();

// router.get('/user', userRouter);
router.get('/store', (req, res) => {
  res.status(200).send('Estas en Store');
});
router.get('/product', (req, res) => {
  res.status(200).send('Estas en Products');
});

module.exports = router;
