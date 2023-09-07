const { Router } = require('express');
const { singUp } = require('../controllers/singUpController');
const { singOut } = require('../controllers/singOutController');
const { checkRoles } = require('../middlewares/checkSellerRole');
const {
  updateUserHandler,
  getAllUsersHandler,
} = require('../handlers/putUserHandler');
const { verifyToken } = require('../middlewares/verifyToken');
const passport = require('passport');

const userRouter = Router();

userRouter.get(
  '/',
  verifyToken,
  passport.authenticate('jwt', { session: false }),
  getAllUsersHandler
);

userRouter.post('/singup', singUp);

userRouter.post('/singout', singOut);

userRouter.post(
  '/modify',
  verifyToken,
  passport.authenticate('jwt', { session: false }),
  updateUserHandler
);

module.exports = userRouter;
