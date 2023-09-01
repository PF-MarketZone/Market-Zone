require('dotenv').config();
const OAuth2Strategy = require('passport-google-oauth20').Strategy;
const {
  authGoogleController,
} = require('../../../controllers/authGoogleController');
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENTE_SECRET, DOMAIN_NAME } = process.env;

const options = {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENTE_SECRET,
  callbackURL: `${DOMAIN_NAME}/api/v1/auth/cb`,
  passReqToCallback: true,
};

const GoogleStrategy = new OAuth2Strategy(options, authGoogleController);

module.exports = GoogleStrategy;
