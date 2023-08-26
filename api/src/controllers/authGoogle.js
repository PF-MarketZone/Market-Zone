require('dotenv').config();
const jwt = require('jsonwebtoken');
const Roles = require('../models/Roles.js');
const { JWT_SECRET, JWT_REFRESH } = process.env;

const singInGoogle = async (req, res, next) => {
  try {
    const user = req.user;

    const roles = await Roles.find({ _id: { $in: user.role } });
    const rolesName = roles.map((rol) => rol.name);

    const payload = {
      sub: user['_id'],
      role: rolesName,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: 900 });
    const refreshToken = jwt.sign(payload, JWT_REFRESH, { expiresIn: 1200 });

    const userSession = {
      user,
      token,
      refreshToken,
    };

    res.redirect(
      `http://localhost:5173/login/success?session=${JSON.stringify(
        userSession
      )}`
    );
  } catch (error) {
    next(error);
  }
};

module.exports = { singInGoogle };
