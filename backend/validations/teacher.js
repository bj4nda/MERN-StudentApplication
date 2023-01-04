const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi)
const Teacher = require('../models/Teacher');

const teacherValidations  = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().required().min(5).max(255).email(),
    password: Joi.string().alphanum().min(5).max(255)
    })

module.exports = teacherValidations; 


/* if(request.params._id){
        return res.status(200).json({"message": "request"})
    }
    let student = await Student.findByIdAndDelete(req.params._id);
    const {name, age, Class, section, rollnumber, address, mobile, email } = req.body;
    /* let removeOneStudent = await Classes.findByIdAndUpdate(classId,{$pull: {currentStudent: student.id}, $inc: { strength: -1 }}); */