const Users = require('../models/Users');

const findAllUsers = async () => {
  const allUsers = await Users.find();
  return allUsers;
};

const getUserById = async (_id) => {
  const userById = await Users.findById(_id);
  console.log(userById);
  return userById;
};

const modifyUserById = async (
  _id,
  name,
  last_name,
  age,
  phoneNumber,
  address,
  shippingAddress
) => {
  const userFinded = await Users.findById(_id);
  console.log({ userFinded });
  if (name) {
    userFinded.name = name;
  }
  if (last_name) {
    userFinded.last_name = last_name;
  }
  if (age) {
    userFinded.age = age;
  }
  if (phoneNumber) {
    userFinded.phoneNumber = phoneNumber;
  }
  if (address) {
    userFinded.address = address;
  }
  if (shippingAddress) {
    userFinded.shippingAddress = shippingAddress;
  }

  await orderFinded.save();
  console.log(orderFinded);
};

module.exports = {
  findAllUsers,
  modifyUserById,
  getUserById,
};
