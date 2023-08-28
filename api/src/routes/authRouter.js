const { Router } = require('express');
const passport = require('passport');
const { singIn } = require('../controllers/authController');
const {  recoveryHandler, changeHandler } = require('../handlers/recoveryHandler')
const authRouter = Router();

authRouter.post(
  '/singin',
  passport.authenticate('local', { session: false }),
  singIn
);

authRouter.get('/', (req, res) => {
  res.status(200).send('auth route');
});

authRouter.post('/recovery',
recoveryHandler );

authRouter.post('/changePassword',
changeHandler )

module.exports = authRouter;
