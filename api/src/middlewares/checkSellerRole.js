const boom = require('@hapi/boom');

function checkRoles(...roles) {
  return (req, res, next) => {
    const user = req.user;
    const hasMatch = user.role.some((rolUsuario) => roles.includes(rolUsuario));

    if (hasMatch) {
      next();
    } else {
      next(boom.unauthorized());
    }
  };
}

module.exports = { checkRoles };
