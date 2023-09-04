const {
  modifyUserById,
  findAllUsers,
  getUserById,
} = require('../controllers/userController');
const { responseMaper } = require('../helpers/responseMaper');

const getAllUsersHandler = async (req, res) => {
  try {
    const { _id } = req.query;
    console.log(req.query);
    const allUsers = _id ? await getUserById(_id) : await findAllUsers();
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
    const { _id, name, last_name, age, phoneNumber, address, shippingAddress } =
      req.body; // parametros a modificar

    // email, password y role no se modifican por este medio...

    await modifyUserById(
      _id,
      name,
      last_name,
      age,
      phoneNumber,
      address,
      shippingAddress
    ); // funcion para modificar
    res
      .status(200)
      .json(
        responseMaper(false, `El usuario: ${_id} se modifico con exito`, null)
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
