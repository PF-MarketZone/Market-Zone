const passport = require('passport');

const LocalStrategy = require('./strategies/localStrategy');
const JwtStrategy = require('./strategies/jwtStrategy');
<<<<<<< HEAD

passport.use(LocalStrategy);
passport.use(JwtStrategy);
=======
const GoogleStrategy = require('./strategies/googleStrategy');

passport.use(LocalStrategy);
passport.use(JwtStrategy);
passport.use(GoogleStrategy);
>>>>>>> 18de7f25002793d46641ac23984c4c57cccb035a
