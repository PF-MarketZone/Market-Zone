const handleSuccess = (req, res) => {
  res.status(200).send('Pago aprobado. ¡Gracias por tu compra!');
};

const handlePending = (req, res) => {
  res.status(200).send('Pago pendiente. En espera de confirmación.');
};

const handleFailure = (req, res) => {
  res.status(200).send('Pago fallido. Por favor, intenta nuevamente.');
};

module.exports = { handleSuccess, handlePending, handleFailure };


