const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true,
    },
    studentId: {
        type: Number,
        required: true,
    },
    studentScores: {
        type: Number,
        required: true,
    },
    studentResults: {
        type: Boolean,
        required: true
}
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;