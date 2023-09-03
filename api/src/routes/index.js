const { Router } = require('express');

const storeRouter = require('./storeRouter');
const productRouter = require('./productRouter');
const userRouter = require('./userRouter');
const authRouter = require('./authRouter');
const mercadoPagoRouter = require('./mercadoPagoRouter');
const reviewRouter= require('./reviewRouter')
const router = Router();

// Redireccionamos la ruta a donde sea necesaria para obtener el endpoint
router.get('/', (req, res) => {
  res.status(200).send('api v1');
});

router.use('/store', storeRouter);
router.use('/product', productRouter);
router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use('/create-order', mercadoPagoRouter);
router.use('/reviews', reviewRouter)
module.exports = router;
