const { Router } = require('express');
const passport = require('passport');
const { singIn } = require('../controllers/authController');
const authRouter = Router();

authRouter.post(
  '/singin',
  passport.authenticate('local', { session: false }),
  singIn
);

authRouter.get('/', (req, res) => {
  res.status(200).send('auth route');
});

module.exports = authRouter;
