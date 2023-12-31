const { Router } = require('express');

const storeRouter = require('./storeRouter');
const productRouter = require('./productRouter');
const userRouter = require('./userRouter');
const authRouter = require('./authRouter');
const { createPreference } = require('../controllers/paymentController');

const router = Router();

// Redireccionamos la ruta a donde sea necesaria para obtener el endpoint
router.get('/', (req, res) => {
  res.status(200).send('api v1');
});

// router.get('/user', userRouter);
router.use('/store', storeRouter);
router.use('/product', productRouter);
router.use('/user', userRouter);
router.use('/auth', authRouter);
router.post('/create-preference', createPreference);

module.exports = router;

