const mongoose = require('mongoose');


const classesSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    strength: {
      type: Number,
      max: 20,
      required: true
    },
    noOfAllowedStudents: {
      type: Number,
      max: 20,
      required: true
    },
    currentStudent: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student'
    }]
  }); //one to many students



  /* classesSchema.pre('save',  function(next) {
    this. = this. + 1;
    next();
  }) */

const Classes = mongoose.model("Classes", classesSchema);
module.exports = Classes;


/* Classes.findOneAndUpdate({_id: res._id}, {$inc: { strength: 1 } }) */
    /*        Classes.findOneAndUpdate({_id: currentStudents._id}, {$inc: { strength: 1 } })
 *//*        let currentClass = await Student.findByIdAndUpdate(strength, {$inc: {strength: newClasses.strength + 1}});
 */
/*
router.post('/create-class', async (req, res) => {
    const { name, strength, noOfAllowedStudents, studentIds } = req.body;

    const newClass = new Class({
        name,
        strength,
        noOfAllowedStudents,
        currentStudents: []
    });

    try {
        const savedClass = await newClass.save();

        if (studentIds && studentIds.length > 0) {
            const students = await Student.find({
                _id: {
                    $in: studentIds
                }
            });

            students.forEach(student => {
                savedClass.currentStudents.push(student);
            });

            await savedClass.save();
        }

        res.send(savedClass);
    } catch (error) {
        res.status(500).send(error);
    }
});



const { number } = require('@hapi/joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create a class schema 1 to 10 , schema field : name, strength, no of allowed students, current students aaray of student ids
// 5 different students -id to array of student ids stored in studentclass schema names primary and foreign keys populate.
// create endpoint for creating class and add students to class schema object id ref foreign keys and primary keys


/* const scoreSchema = new Schema({ 
    name: String,
    Score: {type: Schema.Types.ObjectId, ref: 'subject'}
 }); */

/* const Subject = mongoose.model('Class', subjectSchema);
 *//* 
 */
/* module.exports = {Subject, Score}; */


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

