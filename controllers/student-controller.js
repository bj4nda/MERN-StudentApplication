const Student = require('../models/Student');
const Classes = require('../models/Classes');
const {studentValidations, studentValidationsGetId, studentValidationsByIdAndUpdate, studentValidationsDeleteById} = require('../validations/students');
const {validateAsync} = require('express-validation');
const mongoose = require('mongoose');

const getStudents = async(req, res, next) => {
    let students = await Student.find();
        if(!students) {
            return res.status(404).json({message: 'student not found'});
        }
        res.status(200).json({students})   
    }


const addStudents =  async(req, res, next) => {
    
    try{

        await studentValidations.validateAsync(req.body)

    } catch(err){
        
        return res.status(400).json({error: err.message})
    }

    const session = await mongoose.startSession();
    session.startTransaction(); 
          



    // creating instance of student model single function atomic way 
    let student = new Student({
        name: req.body.name,
        Id: req.body.Id,
        gender: req.body.gender,
        results: req.body.results,
        mobile: req.body.mobile,
        marks: req.body.marks,
        classId: req.body.classId
    })

    const {name, Id, gender, results, mobile, marks, classId } = req.body;
    try {
    let savedStudent = await student.save({session: session});
    let currentStudent = await Classes.findByIdAndUpdate(classId, {$push: {currentStudent: student.id}}, {$inc: { strength: 1 }}, {session: session}); 
    await session.commitTransaction();
    session.endSession();
    } catch (e) {
        await session.abortTransaction();
        session.endSession(); 
    }
    if(!student) {
        return res.status(500).json({message: "cannot save student"});
    }
    res.status(200).json("success student successfully added");
    next();
}

 
const getStudentsById = async(req, res, next) => {
    let studentsID = req.params.id;

    let student = await Student.findById(studentsID);
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
    let studentsID = req.params.id;
    
    try{
        await studentValidationsByIdAndUpdate.validateAsync(req.body)
    } catch(err){
        return res.status(400).json({error: err.message});
    }
    
    let student = await Student.findByIdAndUpdate(studentsID, {
        name: req.body.name,
        Id: req.body.Id,
        gender: req.body.gender,
        results: req.body.results,
        mobile: req.body.mobile,
        marks: req.body.marks,
        classId: req.body.classId
    });
    
    student = await student.save()
    if(!student) {
        return res.status(500).json({message: 'Cannot save student'});
    } else {
        return res.status(201).json({student});
    }
}


const deleteStudentsById = async(req, res, next) => {
    let studentsID = req.params.id;
    
    try{
        await studentValidationsDeleteById.validateAsync(req.body)
    } catch(err){
        return res.status(400).json({error: err.message})
    }
    let student = await Student.findByIdAndRemove(studentsID);
    const {name, Id, gender, results, mobile, marks, classId } = req.body;
    let removeOneStudent = await Classes.findByIdAndUpdate(classId,{$pull: {currentStudent: student.id}, $inc: { strength: -1 }});


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
