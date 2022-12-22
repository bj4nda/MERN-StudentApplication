const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi)
const Student = require('../models/Student');

const studentValidations  = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    Id: Joi.number().required(),
    gender: Joi.string().required().valid('male', 'female'),
    results: Joi.boolean().required(),
    mobile: Joi.number().min(100000000).max(999999999).required(),
    marks: Joi.array().items(Joi.number().min(0).max(100)).required(),
    classId: Joi.string().required()
})
   

const studentValidationsByIdAndUpdate = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    Id: Joi.number().required(),
    gender: Joi.string().required().valid('male', 'female'),
    results: Joi.boolean().required(),
    mobile: Joi.number().min(100000000).max(999999999).required(),
    marks: Joi.array().items(Joi.number().min(0).max(100)).required(),
    classId: Joi.string().required()
    
})


const studentValidationsGetId = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    Id: Joi.number().required(),
    gender: Joi.string().required().valid('male', 'female'),
    results: Joi.boolean().required(),
    mobile: Joi.number().min(100000000).max(999999999).required(),
    marks: Joi.array().items(Joi.number().min(0).max(100)).required(),
    classId: Joi.string().required()

})

const studentValidationsDeleteById = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    Id: Joi.number().required(),
    gender: Joi.string().required().valid('male', 'female'),
    results: Joi.boolean().required(),
    mobile: Joi.number().min(100000000).max(999999999).required(),
    marks: Joi.array().items(Joi.number().min(0).max(100)).required(),
    classId: Joi.string().required()

})

module.exports = {studentValidations, studentValidationsGetId, studentValidationsByIdAndUpdate, studentValidationsDeleteById};
