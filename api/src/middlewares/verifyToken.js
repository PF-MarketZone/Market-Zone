const boom = require('@hapi/boom');
const RevokedTokens = require('../models/BlackListTokens');

async function verifyToken(req, res, next) {
  const takingAccessToken = req.headers['authorization'];

  const accessToken = takingAccessToken && takingAccessToken.split(' ')[1];
  const refreshToken = req.headers['refresh-token'];

  const query = {
    accessToken,
    refreshToken,
  };

  const revokedTkns = await RevokedTokens.findOne(query);
  if (!revokedTkns) {
    next();
  } else {
    next(boom.unauthorized());
  }
}

module.exports = { verifyToken };
