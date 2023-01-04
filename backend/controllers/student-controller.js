const Student = require('../models/Student');
const {studentValidations, studentValidationsGetId, studentValidationsByIdAndUpdate, studentValidationsDeleteById} = require('../validations/students');
const {validateAsync} = require('express-validation');
const mongoose = require('mongoose');
const { request } = require('express');

const getStudents = async(req, res, next) => {
    let students = await Student.find();
        if(!students) {
            return res.status(404).json({message: 'student not found'});
        }
        return res.status(200).json({students})   
    }


const addStudents =  async(req, res, next) => {
    
    try{
        const result =  studentValidations.validateAsync(req.body)
    } catch(err){
        
        return res.status(400).json({error: err.message})
    }

    let student = new Student({
        name: req.body.name,
        age: req.body.age,
        Class: req.body.Class,
        section: req.body.section,
        rollnumber: req.body.rollnumber,
        address: req.body.address,
        mobile: req.body.mobile,
        email: req.body.email,
    })

    const {name, age, Class, section, rollnumber, address, mobile, email } = req.body;
    try {
    let savedStudent = await student.save();
    } catch (e) {
        console.log({message: e.message}) 
    } 
    if(!student) {
        return res.status(500).json({message: "cannot save student"});
    }
    return res.status(200).json("success student successfully added");
    next();
}

 
const getStudentsById = async(req, res, next) => {
    let studentsID = req.params._id;
    
    try{
        const result = await studentValidationsGetId.validateAsync(req.query._id)
    } catch(err){
        return res.status(400).json({error: err.message});
    }

    let student = await Student.findById(studentsID);
    if(!student) {
        return res.status(404).json({message: 'student not found'});
    } 
    return res.status(200).json({student})    
}


const getStudentsByIdAndUpdate = async(req, res, next) => {
    let studentsID = req.params._id;
    try{
        const result = await studentValidationsByIdAndUpdate.validateAsync(req.body)
    } catch(err){
        if(err.isJoi === true) err.status = 422
        return res.status(400).json({error: err.message});
    }
    
    let student = await Student.findByIdAndUpdate(studentsID, {
        name: req.body.name,
        age: req.body.age,
        Class: req.body.Class,
        section: req.body.section,
        rollnumber: req.body.rollnumber,
        address: req.body.address,
        mobile: req.body.mobile,
        email: req.body.email
    });
    
    let saveStudent = await student.save()
    if(!student) {
        return res.status(500).json({message: 'Cannot save student'});
    } else {
        return res.status(201).json({saveStudent});
    }
}


const deleteStudentsById = async(req, res, next) => {
    let studentsID = req.params._id;
    try{
         await studentValidationsDeleteById.validateAsync()
    } catch(err){
        return res.status(400).json({error: err.message})
        
    }
    let student = await Student.findByIdAndDelete(studentsID);

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
