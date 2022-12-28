const { object } = require('@hapi/joi');
const mongoose = require('mongoose');
/* name, age, class, section, rollnumber, address, mobile, email.
 */const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    Class: {
        type: Number,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    rollnumber: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    /* marks: {
         type: mongoose.Schema.Types.ObjectId,
        ref: 'Courses',
        type:  Array,
        default: []
    }*/
    /* User : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }  */
   
});



const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;

