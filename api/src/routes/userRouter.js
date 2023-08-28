const { Router } = require('express');
const { singUp } = require('../controllers/singUpController');
const { singOut } = require('../controllers/singOutController');
const userRouter = Router();

userRouter.post('/singup', singUp);

userRouter.post('/singout', singOut);

module.exports = userRouter;
