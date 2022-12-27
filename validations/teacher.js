/* const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi)
const Teacher = require('../models/Teacher');

const teacherValidations  = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().required().min(5).max(255).email(),
    password: Joi.string().alphanum().min(5).max(255)
    })

module.exports = teacherValidations;  */