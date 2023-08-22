require('dotenv').config();
const jwt = require('jsonwebtoken');
const Roles = require('../models/Roles.js');
const { JWT_SECRET } = process.env;

const singIn = async (req, res, next) => {
  try {
    const user = req.user;

    const roles = await Roles.find({ _id: { $in: user.role } });
    const rolesName = roles.map((rol) => rol.name);

    const payload = {
      sub: user['_id'],
      role: rolesName,
    };

    const token = jwt.sign(payload, JWT_SECRET);

    res.json({
      user,
      token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { singIn };
