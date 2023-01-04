const express = require('express');
const Student = require('../models/Student');
const router = express.Router();
const studentController = require('../controllers/student-controller')
const userController = require('../controllers/user-controller')
const studentValidations = require('../validations/students');
const {validate} = require('express-validation');
const auth = require("../middleware/auth");
const admin = require('../middleware/admin');


 router.get('/all', studentController.getStudents);

 router.post('/add',  studentController.addStudents);

 router.get('/:_id', studentController.getStudentsById);

router.patch("/patch/:_id", studentController.getStudentsByIdAndUpdate);

 router.delete('/delete/:_id', studentController.deleteStudentsById);

// 

/* router.post('/addClass', classController.updateClass);

router.get('/getClass/:id', classController.getClass);

router.get('/addTeacher/:id', auth, async(req, res) => {
    const teacher = await Teacher.findById(req.teacher._id).select('-password');
    console.log(teacher);
    res.json(teacher);
    
 });
*/
 //adding teacher to the list of students add to all routes with authoerized

/* router.post('/register', userController.registerUser);
 */// authorization 

module.exports = router;