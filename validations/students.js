const Joi = require('@hapi/joi');
const Student = require('../models/Student');

const studentValidations = Joi.object({
    studentName: Joi.string().alphanum().min(3).max(30).required(),
    studentId: Joi.number().required(),
    studentGender: Joi.string().required().valid('male', 'female'),
    studentResults: Joi.boolean().required(),
    studentMobile: Joi.number().min(100000000).max(999999999).required(),
    studentMarks: Joi.array().items(Joi.number().min(0).max(100)).required()
})
   

const studentValidationsByIdAndUpdate = Joi.object({
    studentName: Joi.string().alphanum().min(3).max(30).required(),
    studentId: Joi.number().required(),
    studentGender: Joi.string().required().valid('male', 'female'),
    studentResults: Joi.boolean().required(),
    studentMobile: Joi.number().min(100000000).max(999999999).required(),
    studentMarks: Joi.array().items(Joi.number().min(0).max(100)).required(),
})


const studentValidationsGetId = Joi.object({
    studentName: Joi.string().alphanum().min(3).max(30).required(),
    studentId: Joi.number().required(),
    studentGender: Joi.string().required().valid('male', 'female'),
    studentResults: Joi.boolean().required(),
    studentMobile: Joi.number().min(100000000).max(999999999).required(),
    studentMarks: Joi.array().items(Joi.number().min(0).max(100)).required()

})

const studentValidationsDeleteById = Joi.object({
    studentName: Joi.string().alphanum().min(3).max(30).required(),
    studentId: Joi.number().required(),
    studentGender: Joi.string().required().valid('male', 'female'),
    studentResults: Joi.boolean().required(),
    studentMobile: Joi.number().min(100000000).max(999999999).required(),
    studentMarks: Joi.array().items(Joi.number().min(0).max(100)).required()

})

module.exports = {studentValidations, studentValidationsGetId, studentValidationsByIdAndUpdate, studentValidationsDeleteById};
