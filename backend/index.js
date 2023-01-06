const {application} = require("express")
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const StudentModel = require("./models/Student")
const UserModel = require("./models/User")
const router = require("./routes/allroutes")
const router1 = require("./routes/user-routes")
/*  const auth = require('./routes/auth') */
const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const config = require("config")
app.use(cors({credentials: true, origin: "http://localhost:3000"}))
//connections password: pjQx4NqkT!4hp4g
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use("/", router)
app.use("/auth", router1)


mongoose
  .connect(
    "mongodb+srv://Bharath:pjQx4NqkT!4hp4g@crud.mdmfsjj.mongodb.net/student?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("Server connected to database")
    })
  })
  .catch(err => {
    console.log("Error")
  })
