const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi)
const Student = require('../models/Student');
/* name, age, class, section, rollnumber, address, mobile, email.*/
const studentValidations  = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    age: Joi.number().required(),
    Class: Joi.number().required(),
    section: Joi.string().valid("A", "B", "C").required(),
    rollnumber: Joi.number().required(),
    address: Joi.string().required(),
    mobile: Joi.number().min(100000000).max(999999999).required(),
    email: Joi.string().required(),
})
   

const studentValidationsByIdAndUpdate = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    age: Joi.number().required(),
    Class: Joi.number().required(),
    section: Joi.string().valid("A", "B", "C").required(),
    rollnumber: Joi.number().required(),
    address: Joi.string().required(),
    mobile: Joi.number().min(100000000).max(999999999).required(),
    email: Joi.string().required(),
    
})


const studentValidationsGetId = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    age: Joi.number().required(),
    Class: Joi.number().required(),
    section: Joi.string().valid("A", "B", "C").required(),
    rollnumber: Joi.number().required(),
    address: Joi.string().required(),
    mobile: Joi.number().min(100000000).max(999999999).required(),
    email: Joi.string().required(),

})

const studentValidationsDeleteById = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    age: Joi.number().required(),
    Class: Joi.number().required(),
    section: Joi.string().valid("A", "B", "C").required(),
    rollnumber: Joi.number().required(),
    address: Joi.string().required(),
    mobile: Joi.number().min(100000000).max(999999999).required(),
    email: Joi.string().required(),

})

module.exports = {studentValidations, studentValidationsGetId, studentValidationsByIdAndUpdate, studentValidationsDeleteById};
