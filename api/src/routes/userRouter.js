const { Router } = require('express');
const { singUp } = require('../controllers/singUpController');
const userRouter = Router();

userRouter.post('/singup', singUp);

userRouter.get('/', (req, res) => {
  res.status(200).send('user route');
});

module.exports = userRouter;
