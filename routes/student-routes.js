const express = require('express');
const Student = require('../models/Student');
const router = express.Router();
const studentController = require('../controllers/student-controller')
const studentValidations = require('../validations/students');
const {validate} = require('express-validation');
// 
const getStudents = router.get('/', studentController.getStudents);


const sendStudents = router.post('/',   studentController.addStudents);

const getStudentsById = router.get('/:id', studentController.getStudentsById);

const getStudentsByIdAndUpdate = router.patch("/:id", studentController.getStudentsByIdAndUpdate);

const deleteStudentsById = router.get('/:id', studentController.deleteStudentsById);


module.exports = router;