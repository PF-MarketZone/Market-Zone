const User = require('../models/Users.js');
const Roles = require('../models/Roles.js');

const singUp = async (req, res, next) => {
  try {
    const {
      name,
      email,
      last_name,
      password,
      role,
      age,
      phoneNumber,
      address,
      shippingAddress,
    } = req.body;

    const newUser = new User({
      name,
      last_name,
      email,
      password: await User.hashPass(password),
      age,
      phoneNumber,
      address,
      shippingAddress,
    });

    if (role) {
      const foundRoles = await Roles.find({ name: { $in: role } });
      newUser.role = foundRoles.map((role) => role._id);
    } else {
      const role = await Roles.findOne({ name: 'customer' });
      newUser.role = [role._id];
    }

    const savedUser = await newUser.save();
    delete savedUser['_doc'].password;

    res.status(201).json(savedUser);
  } catch (error) {
    next(error);
  }
};

module.exports = { singUp };
