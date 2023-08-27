require('dotenv').config();
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_REFRESH } = process.env;

const refreshToken = (req, res, next) => {
  try {
    const refreshToken = req.headers['refresh-token'];

    jwt.verify(refreshToken, JWT_REFRESH, (error, decoded) => {
      if (error) {
        throw new Error('Error3');
      } else {
        const payload = { sub: decoded.sub, role: decoded.role };

        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: 900 });
        const refreshToken = jwt.sign(payload, JWT_REFRESH, {
          expiresIn: 1200,
        });

        res.json({
          token,
          refreshToken,
        });
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { refreshToken };
