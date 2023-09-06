const {
  modifyUserById,
  findAllUsers,
  getUserById,
} = require('../controllers/userController');
const { responseMaper } = require('../helpers/responseMaper');
const Roles = require('../models/Roles');

const getAllUsersHandler = async (req, res) => {
  try {
    const { _id } = req.query;
    console.log(req.query);
    const allUsers = _id ? await getUserById(_id) : await findAllUsers();

    for (const user of allUsers) {
      const roles = await Roles.find({ _id: { $in: user.role } });
      const rolesName = roles.map((rol) => rol.name);
      user['_doc']['role'] = rolesName;
    }

    res
      .status(200)
      .json(responseMaper(false, 'Aqui estan todos los usuarios', allUsers));
  } catch (error) {
    res.status(500).json(responseMaper(true, 'Error al buscar usuarios', null));
  }
};

const updateUserHandler = async (req, res) => {
  // console.log(req.body);
  try {
    const {
      _id,
      name,
      last_name,
      age,
      phoneNumber,
      address,
      shippingAddress,
      active,
      role,
    } = req.body; // parametros a modificar

    // email, password y role no se modifican por este medio...

    const userModified = await modifyUserById(
      _id,
      name,
      last_name,
      age,
      phoneNumber,
      address,
      shippingAddress,
      active,
      role
    ); // funcion para modificar
    res
      .status(200)
      .json(
        responseMaper(
          false,
          `El usuario: ${_id} se modifico con exito`,
          userModified
        )
      );
  } catch (error) {
    res
      .status(500)
      .json(responseMaper(true, 'Error al modificar el usuario', null));
  }
};

module.exports = {
  getAllUsersHandler,
  updateUserHandler,
};
