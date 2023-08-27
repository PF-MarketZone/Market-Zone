const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const User = require('../../../models/Users');

const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const userFound = await User.findOne({ email });
      if (!userFound) {
        done(boom.unauthorized(), false);
      }
      const isMatch = await User.comparePass(password, userFound.password);

      if (!isMatch) {
        done(boom.unauthorized(), false);
      }

      delete userFound['_doc'].password;

      done(null, userFound);
    } catch (error) {
<<<<<<< HEAD
      done(error, false);
=======
      done(boom.unauthorized(), false);
>>>>>>> 18de7f25002793d46641ac23984c4c57cccb035a
    }
  }
);

module.exports = LocalStrategy;
