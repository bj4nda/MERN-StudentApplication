const { application } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const StudentModel = require('./models/Student')
 const router = require('./routes/allroutes')
 const auth = require('./routes/auth')
 const bodyParser = require("body-parser")
const config = require('config')

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/students', router);
app.use('/classes', router);
app.use('/teachers', router);
app.use('/auth', auth);
//connections password: pjQx4NqkT!4hp4g

if(!config.has('jwtPrivateKey')) {
    console.error('ERROR: jwt private key not defined');
    process.exit(1);
 }

mongoose.connect("mongodb+srv://Bharath:pjQx4NqkT!4hp4g@crud.mdmfsjj.mongodb.net/student?retryWrites=true&w=majority", {
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















