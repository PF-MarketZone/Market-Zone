// require('dotenv').config();
// const { OAuth2Strategy } = require('passport-google-oauth');
// const {
//   authGoogleController,
// } = require('../../../controllers/authGoogleController');
// const { GOOGLE_CLIENT_ID, GOOGLE_CLIENTE_SECRET } = process.env;

// const options = {
//   clientID: GOOGLE_CLIENT_ID,
//   clientSecret: GOOGLE_CLIENTE_SECRET,
//   callbackURL: 'http://localhost:3004/api/v1/auth/cb',
//   // scope: ['profile'],
//   passReqToCallback: true,
// };

// const GoogleStrategy = new OAuth2Strategy(options, authGoogleController);

// module.exports = GoogleStrategy;

require('dotenv').config();
const OAuth2Strategy = require('passport-google-oauth20').Strategy;
const {
  authGoogleController,
} = require('../../../controllers/authGoogleController');
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENTE_SECRET } = process.env;

const options = {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENTE_SECRET,
  callbackURL: 'http://localhost:3004/api/v1/auth/cb',
  passReqToCallback: true,
};

const GoogleStrategy = new OAuth2Strategy(options, authGoogleController);

module.exports = GoogleStrategy;
