const express = require('express');
const Student = require('../models/Student');
const router = express.Router();
const studentController = require('../controllers/student-controller')
/* const classController = require('../controllers/class-controller')
const teachercontroller = require('../controllers/teacher-controller') */
/* const userController = require('../controllers/user-controller')
 */const studentValidations = require('../validations/students');
const {validate} = require('express-validation');
/* const Classes = require('../models/Classes');
const Teacher = require('../models/Teacher');
const teacherValidations = require('../validations/teacher'); */
/* const auth = require("../middleware/auth");
const admin = require('../middleware/admin'); */


 router.get('/', studentController.getStudents);

 router.post('/add',  studentController.addStudents);

 router.get('/:email', studentController.getStudentsById);

router.patch("/update/:email", studentController.getStudentsByIdAndUpdate);

 router.delete('/:email', studentController.deleteStudentsById);



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