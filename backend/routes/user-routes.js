const express = require("express")
const {
  getAllusers,
  register,
  login,
  verifyToken,
  getUser,
  refreshToken,
  logout,
} = require("../controllers/user-controller")
const router = require("./allroutes")
const router1 = express.Router()

router1.get("/user", getAllusers)

router1.post("/register", register)

router1.post("/login", login)

router1.get("/userid", verifyToken, getUser)

router1.get("/refresh", refreshToken, verifyToken, getUser)

router1.post("/logout", verifyToken, logout)

module.exports = router1
