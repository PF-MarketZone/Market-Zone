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
>>>>>>> d8933b61361f9f7090de45b2d22614303493f3a5
