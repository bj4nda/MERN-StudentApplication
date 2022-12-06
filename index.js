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















