const { Router } = require('express');
const { singIn } = require('../controllers/authController');
const { refreshToken } = require('../controllers/refreshToken');
const authRouter = Router();
const passport = require('passport');
const { singInGoogle } = require('../controllers/authGoogle');

authRouter.post(
  '/singin',
  passport.authenticate('local', { session: false }),
  singIn
);

authRouter.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

authRouter.get(
  '/cb',
  passport.authenticate('google', {
    session: false,
  }),
  singInGoogle
);

authRouter.post('/refresh-tkn', refreshToken);

module.exports = authRouter;
