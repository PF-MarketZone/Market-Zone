const User = require('../models/Users.js');
const Roles = require('../models/Roles.js');

const authGoogleController = async (
  req,
  accessToken,
  refreshToken,
  profile,
  done
) => {
  const googleUser = {
    name: profile.name.givenName,
    email: profile.emails[0].value,
    last_name: profile.name.familyName,
    password: await User.hashPass(`${profile.id}${profile.emails[0].value}`),
    provider: profile.provider,
  };

  const findUser = await User.findOne({
    $and: [{ email: googleUser.email }, { provider: googleUser.provider }],
  });

  if (findUser) {
    delete findUser['_doc'].password;
    profile = findUser;
  } else {
    const newUser = new User(googleUser);

    const role = await Roles.findOne({ name: 'customer' });
    newUser.role = [role._id];

    const savedUser = await newUser.save();
    delete savedUser['_doc'].password;

    profile = savedUser;
  }

  return done(null, profile);
};

module.exports = { authGoogleController };
