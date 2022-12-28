const Student = require('../models/Student');
/* const Classes = require('../models/Classes');
 */const {studentValidations, studentValidationsGetId, studentValidationsByIdAndUpdate, studentValidationsDeleteById} = require('../validations/students');
const {validateAsync} = require('express-validation');
const mongoose = require('mongoose');

const getStudents = async(req, res, next) => {
    let students = await Student.find();
        if(!students) {
            return res.status(404).json({message: 'student not found'});
        }
        res.status(200).json({students})   
    }
/* name, age, class, section, rollnumber, address, mobile, email.*/


const addStudents =  async(req, res, next) => {
    
    try{

        await studentValidations.validateAsync(req.body)

    } catch(err){
        
        return res.status(400).json({error: err.message})
    }

    /* const session = await mongoose.startSession();
    session.startTransaction();  */
          


    /*let currentStudent = await Student.findByIdAndUpdate(email,  {$push: {currentStudent: student.id}}, {$inc: { strength: 1 }}, {session: session} ); 
    /* await session.commitTransaction();
    session.endSession();*/

    // creating instance of student model single function atomic way 
    let student = new Student({
        name: req.body.name,
        age: req.body.age,
        Class: req.body.Class,
        section: req.body.section,
        rollnumber: req.body.rollnumber,
        address: req.body.address,
        mobile: req.body.mobile,
        email: req.body.email
/*         classId: req.body.classId
 */    })

    /* const {name, age, Class, section, rollnumber, address, mobile, email } = req.body; */
    try {
    let savedStudent = await student.save(/* {session: session} */);
    } catch (e) {
        console.log({message: e.message}) 
    } 
    if(!student) {
        return res.status(500).json({message: "cannot save student"});
    }
    res.status(200).json("success student successfully added");
    next();
}

 
const getStudentsById = async(req, res, next) => {
   

    let student = await Student.findOne({email: req.params.email}, []);
    if(!student) {
        return res.status(404).json({message: 'student not found'});
    } 
    res.status(200).json({student})    
    try{
        await studentValidationsGetId.validateAsync(student)
    } catch(err){
        return res.status(400).json({error: err.message});
    }
}


const getStudentsByIdAndUpdate = async(req, res, next) => {
/*     let studentsID = req.params.id;
 */    
    try{
        await studentValidationsByIdAndUpdate.validateAsync(req.body)
    } catch(err){
        return res.status(400).json({error: err.message});
    }
    
    let student = await Student.findOneAndUpdate({email : req.params.email}, {
        name: req.body.name,
        age: req.body.age,
        Class: req.body.Class,
        section: req.body.section,
        rollnumber: req.body.rollnumber,
        address: req.body.address,
        mobile: req.body.mobile,
        email: req.body.email
    });
    
    student = await student.save()
    if(!student) {
        return res.status(500).json({message: 'Cannot save student'});
    } else {
        return res.status(201).json({student});
    }
}


const deleteStudentsById = async(req, res, next) => {
/*     let studentsID = req.params.id;
 */    
    try{
        await studentValidationsDeleteById.validateAsync(req.body)
    } catch(err){
        return res.status(400).json({error: err.message})
    }
    let student = await Student.findOneAndDelete({email: req.params.email});
    /* const {name, age, Class, section, rollnumber, address, mobile, email } = req.body */;
/*     let removeOneStudent = await Classes.findByIdAndUpdate(classId,{$pull: {currentStudent: student.id}, $inc: { strength: -1 }});
 */

    if(!student) {
        return res.status(404).json({message: 'unable to delete student '});
    } 
    return res.status(200).json({message : "deleted student"})    

}

exports.getStudents = getStudents;
exports.addStudents = addStudents;
exports.getStudentsById = getStudentsById;
exports.getStudentsByIdAndUpdate = getStudentsByIdAndUpdate;
exports.deleteStudentsById = deleteStudentsById;
