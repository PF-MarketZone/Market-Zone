const { Router } = require('express');
const { singUp } = require('../controllers/singUpController');
const { singOut } = require('../controllers/singOutController');
const {
  updateUserHandler,
  getAllUsersHandler,
} = require('../handlers/putUserHandler');
const userRouter = Router();

userRouter.get('/', getAllUsersHandler);

userRouter.post('/singup', singUp);

userRouter.post('/singout', singOut);

userRouter.post('/modify', updateUserHandler);

module.exports = userRouter;
