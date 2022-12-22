const { object } = require('@hapi/joi');
const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Id: {
        type: Number,
        required: true
    },
    gender: {
        type: String
    },
    results: {
        type: Boolean
    },
    mobile: {
        type: Number
    },
    marks: {
        /* type: mongoose.Schema.Types.ObjectId,
        ref: 'Courses', */
        type:  Array,
        default: []
    },
    classId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classes'
    }
   
});



const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;

