const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
const teacherSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
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
// read abt oop js this where 
teacherSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({_id: this.id, isAdmin: this.isAdmin}, config.get('jwtPrivateKey'));
  return token;
}

const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;
