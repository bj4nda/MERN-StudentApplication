const Joi = require('@hapi/joi');
const Student = require('../models/Student');

const studentValidations = Joi.object({
            studentName: Joi.string().required(),
            studentId: Joi.number().required(),
            studentScores: Joi.number().required(),
            studentResults: Joi.boolean().required(),
        })
   


module.exports = studentValidations;