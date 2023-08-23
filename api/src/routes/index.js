const { Router } = require('express');
const storeRouter = require('./storeRouter');
const productRouter = require('./productRouter');
const { createPreference } = require('../controllers/paymentController'); // Importa la función createPreference

const router = Router();

// Agrega tus otros enrutadores aquí
router.use('/store', storeRouter);
router.use('/product', productRouter);

// Ruta para crear una preferencia
router.post('/create-preference', createPreference);

module.exports = router;

