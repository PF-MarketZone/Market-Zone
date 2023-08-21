const mongoose = require('mongoose');
const bcrypt = require('bcrypt');





const userSchema = new mongoose.Schema({
  stores: [{type: mongoose.Schema.Types.ObjectId, ref: 'Store',}],
  name: { type: String, required: true,},
  last_name: String,
  email: { type: String, required: true,},
  password: {type: String, required: true, match: /^[A-Za-z0-9]{8,}$/,},
  age: {type: Number, min: 14, max: 99,},
  role: {type: String, enum: ['customer', 'seller', 'admin'], required: true,},
  phoneNumber: Number,
  address: {
    street: String,
    streetNumber: Number,
    postalCode: Number,
    townNeighborhood: String,
    floorApartment: String,
    city: String,
  },
  shippingAddress: [{
      street: String,
      streetNumber: Number,
      postalCode: Number,
      townNeighborhood: String,
      floorApartment: String,
      city: String,
      additionalInformation: String,
    },],
}, {collection: 'users',});


userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
