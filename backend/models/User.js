const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1024,
    },
    isAdmin: Boolean
  });

  

const User = mongoose.model("User", userSchema);
module.exports = User;
