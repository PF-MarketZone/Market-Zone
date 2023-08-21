const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    last_name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number, min: 14, max: 99 },
    role: [
      {
        ref: 'Rol',
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
    phoneNumber: Number,
    address: {
      street: String,
      streetNumber: Number,
      postalCode: Number,
      townNeighborhood: String,
      floorApartment: String,
      city: String,
    },
    shippingAddress: [
      {
        street: String,
        streetNumber: Number,
        postalCode: Number,
        townNeighborhood: String,
        floorApartment: String,
        city: String,
        additionalInformation: String,
      },
    ],
  },
  { collection: 'users', timestamps: true }
);

userSchema.statics.hashPass = async function (password) {
  const passHash = await bcryptjs.hash(password, 11);
  return passHash;
};

userSchema.statics.comparePass = async function (password, receivedPass) {
  const match = await bcryptjs.compare(password, receivedPass);
  return match;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
