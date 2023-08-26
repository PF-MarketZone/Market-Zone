const mongoose = require('mongoose');

const revokedTokensSchema = new mongoose.Schema(
  {
    accessToken: { type: String, required: true, unique: true },
    refreshToken: { type: String, required: true, unique: true },
  },
  { versionKey: false }
);

const RevokedTokens = mongoose.model('RevokedTokens', revokedTokensSchema);

module.exports = RevokedTokens;
