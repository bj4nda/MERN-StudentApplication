const Teacher = require('../models/Teacher');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');


/*  async(req, res) => {
   const teacher = await Teacher.findById(req.teacher._id).select('-password');
   res.json(teacher);
   
} */

const addTeacher = async (req, res) => {

    try {
      const { _id, name, email, password } = req.body;

      let teacher = await Teacher.findOne({ email: email });
      if(teacher) return res.status(400).json("teacher already registered");
      
      const newTeacher = new Teacher(  _.pick(req.body, ['_id', 'name', 'email', 'password'])); 
      const salt = await bcrypt.genSalt(10);
      newTeacher.password =await bcrypt.hash(newTeacher.password, salt);
      await newTeacher.save();

//hash map algorithm lodash docs how things work async js
      const token = newTeacher.generateAuthToken();

      res.header('x-auth-token', token).json({success:true, data:  _.pick(newTeacher, ['_id', 'name', 'email']) });
      
   } catch (err) {
      res.status(400).json({success: false, message:err.message});
   }
 };

 exports.addTeacher = addTeacher;
