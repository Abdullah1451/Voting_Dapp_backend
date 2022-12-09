const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    expires: 20,
    default: Date.now
  },
  otp: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
