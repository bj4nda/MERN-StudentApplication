const Joi = require("@hapi/joi")
const Student = require("../models/Student")

const studentValidations = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  Class: Joi.number().required(),
  section: Joi.string().required(),
  rollnumber: Joi.number().required(),
  address: Joi.string().required(),
  mobile: Joi.number().required(),
  email: Joi.string().required(),
})

const studentValidationsByIdAndUpdate = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  Class: Joi.number().required(),
  section: Joi.string().required(),
  rollnumber: Joi.number().required(),
  address: Joi.string().required(),
  mobile: Joi.number().required(),
  email: Joi.string().required(),
})

const studentValidationsGetId = Joi.string().optional()

const studentValidationsDeleteById = Joi.string().optional()

module.exports = {
  studentValidations,
  studentValidationsGetId,
  studentValidationsByIdAndUpdate,
  studentValidationsDeleteById,
}
