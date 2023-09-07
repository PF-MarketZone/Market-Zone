require('dotenv').config();
const jwt = require('jsonwebtoken');
const Roles = require('../models/Roles.js');
const boom = require('@hapi/boom');
const { JWT_SECRET, JWT_REFRESH, DOMAIN_NAME_FRONT } = process.env;

const singInGoogle = async (req, res, next) => {
  try {
    const user = req.user;

    const roles = await Roles.find({ _id: { $in: user.role } });
    const rolesName = roles.map((rol) => rol.name);

    if (!user['_doc'].active) {
      return next(boom.unauthorized());
    }

    delete user['_doc'].active;
    user['_doc']['role'] = rolesName;

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
      `${DOMAIN_NAME_FRONT}/login/success?session=${JSON.stringify(
        userSession
      )}`
    );
  } catch (error) {
    next(error);
  }
};

module.exports = { singInGoogle };
