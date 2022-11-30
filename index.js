const { application } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const config = require('./configuration/config');
const StudentModel = require('./models/Student')
 const router = require('./routes/student-routes')
 const bodyParser = require("body-parser")
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use('/students', router);

//connections password: pjQx4NqkT!4hp4g

mongoose.connect(config.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    app.listen(3000, () => {
        console.log("Server connected to database");
    });
}).catch(err => {
    console.log("Error");
});













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


