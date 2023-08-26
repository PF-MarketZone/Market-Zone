const passport = require('passport');

const LocalStrategy = require('./strategies/localStrategy');
const JwtStrategy = require('./strategies/jwtStrategy');
const GoogleStrategy = require('./strategies/googleStrategy');

passport.use(LocalStrategy);
passport.use(JwtStrategy);
passport.use(GoogleStrategy);
