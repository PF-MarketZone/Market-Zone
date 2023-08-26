const RevokedTokens = require('../models/BlackListTokens.js');

const singOut = async (req, res, next) => {
  try {
    const accessToken = req.headers['authorization'].split(' ')[1];
    const refreshToken = req.headers['refresh-token'];

    const revokedTokens = new RevokedTokens({ accessToken, refreshToken });

    await revokedTokens.save();

    res.status(200).json({ message: `Sesión cerrada exitosamente`, closed: true });
  } catch (error) {
    next(error);
  }
};

module.exports = { singOut };
