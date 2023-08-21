const { Router } = require('express');
// const userRouter = require('');

const storeRouter = require('./storeRouter');
const productRouter = require('./productRouter');
const mercadoPagoRouter = require('./mercadoPagoRouter');

const router = Router();

// Redireccionamos la ruta a donde sea necesaria para obtener el endpoint

// router.get('/user', userRouter);
router.use('/store', storeRouter);
router.use('/product', productRouter);
router.use('/mppurchase', mercadoPagoRouter);

module.exports = router;
