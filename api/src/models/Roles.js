const { Schema, model } = require('mongoose');

const rolSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { versionKey: false }
);

const Roles = model('Rol', rolSchema);

module.exports = Roles;
