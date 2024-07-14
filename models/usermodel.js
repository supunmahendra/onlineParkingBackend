const mongoose = require('mongoose');

//user
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    familyName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    roles: { type: [String], default: ['user'] }
  },
  { timestamps: true }
);

module.exports = mongoose.model('parkingUser', userSchema);