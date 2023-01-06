const express = require("express")
const Student = require("../models/Student")
const router = express.Router()
const studentController = require("../controllers/student-controller")
const userController = require("../controllers/user-controller")
const studentValidations = require("../validations/students")
const {validate} = require("express-validation")

router.get("/all", studentController.getStudents)

router.post("/add", studentController.addStudents)

router.get("/:_id", studentController.getStudentsById)

router.patch("/patch/:_id", studentController.getStudentsByIdAndUpdate)

router.delete("/delete/:_id", studentController.deleteStudentsById)

module.exports = router
