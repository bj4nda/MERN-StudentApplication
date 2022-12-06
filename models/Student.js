const { object } = require('@hapi/joi');
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
    studentGender: {
        type: String,
        required: true,
    },
    studentResults: {
        type: Boolean,
        required: true
    },
    studentMobile: {
        type: Number,
        required : true,
    },
    studentMarks: {
        type:  Array,
        default: [],
        required: true
    }
   
});

/* const MarksSchema = new Schema({ name: String });
 */
//add array or objects marks for 5 subjects joi
const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;

//studentName
//studentId
//studentGender
//studentResults
//studentMobile
//studentEmail
//StudentDOB

/*
app.post("/", async (req, res) => {


    const student = new StudentModel({studentName: "Bharath", studentId: 3 });
    try {
        await student.save();
    } catch(err) {
        console.log(err);
    }
});

app.get("/read", async (req, res) => {
    StudentModel.find({}, (err, result) => {
        if(err) {
            res.send(err);
        } else {
            res.send(result);
    }
});
});

     app.post("/update", async (req, res) => {
    
    const newStudentName = req.body.newStudentName;
    const scores = req.body.scores;
    try {
        await student.save();
    } catch(err) {
        console.log(err);
    }
});

app.post("/insert", async (req, res) => {
    const student = new StudentModel({studentName: "Bharath", studentId: 3 });
    try {
        await student.save();
    } catch(err) {
        console.log(err);
    }
}); */
