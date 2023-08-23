const Role = require('../models/Roles');

const createRoles = async function () {
  try {
    const counterRoles = await Role.estimatedDocumentCount();

    if (counterRoles > 0) return;

    const values = await Promise.all([
      new Role({ name: 'admin' }).save(),
      new Role({ name: 'customer' }).save(),
      new Role({ name: 'seller' }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

module.exports = createRoles;
