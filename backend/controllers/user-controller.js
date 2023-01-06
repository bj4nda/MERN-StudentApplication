const {findOne} = require("../models/Student")
const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "MY KEY"

const getAllusers = async (req, res, next) => {
  let users
  try {
    users = await User.find()
  } catch (err) {
    console.log(err)
  }

  if (!users) {
    return res.status(404).json({message: "No users found"})
  }
  return res.status(200).json({users})
}

const register = async (req, res, next) => {
  let existingUser
  const {name, email, password} = req.body

  try {
    existingUser = await User.findOne({email: email})
  } catch (err) {
    return console.log(err)
  }

  if (existingUser) {
    return res.status(400).json({message: "user exists already! Login instead"})
  }

  const salt = bcrypt.genSaltSync(10)

  const hashedPassword = bcrypt.hashSync(password, salt)

  const user = new User({
    name,
    email,
    password: hashedPassword,
  })

  try {
    await user.save()
  } catch (err) {
    console.log(err)
  }
  return res.status(200).json({user})
}

const login = async (req, res, next) => {
  const {email, password} = req.body
  let existingUser

  try {
    existingUser = await User.findOne({email: email})
  } catch (err) {
    console.log(err)
  }

  if (!existingUser) {
    return res.status(200).json({message: "No user found. Register here."})
  }
  const isPasswwordCorrect = bcrypt.compareSync(password, existingUser.password)
  if (!isPasswwordCorrect) {
    return res.status(400).json({message: "Invalid email/password"})
  }

  const token = jwt.sign({_id: existingUser._id}, JWT_SECRET, {
    expiresIn: "30s",
  })
  /* 
  if (req.cookie[`${existingUser._id}`]) {
    req.cookie[`${existingUser._id}`] = ""
  } */

  res.cookie(String(existingUser._id), token, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 30),
    httpOnly: true,
    sameSite: "lax",
  })

  return res
    .status(200)
    .json({message: "Success logged in.", user: existingUser, token})
}

const verifyToken = (req, res, next) => {
  const cookies = req.headers.cookie

  const token = cookies?.split("=")[1]
  if (!token) {
    return res.status(404).json({message: "No token found"})
  }
  jwt.verify(String(token), JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(400).json({message: "Invalid token"})
    }
    req._id = user._id
  })
  next()
}

const getUser = async (req, res, next) => {
  const userId = req._id
  let user
  try {
    user = await User.findById(userId, "-password")
  } catch (err) {
    return new Error(err.message)
  }
  if (!user) {
    return res.status(404).json({message: "User not found"})
  }

  return res.status(200).json({user})
}

const refreshToken = async (req, res, next) => {
  const cookies = req.headers.cookie
  const prevToken = cookies.split("=")[1]
  if (!prevToken) {
    return res.status(400).json({message: "invalid token"})
  }
  jwt.verify(String(prevToken), JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({message: "Authentication failed"})
    }
    res.clearCookie(`${user._id}`)
    req.cookie[`${user._id}`] = ""

    const token = jwt.sign({_id: user._id}, JWT_SECRET, {
      expiresIn: "35s",
    })
    res.cookie(String(user._id), token, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 30),
      httpOnly: true,
      sameSite: "lax",
    })

    req._id = user._id
    next()
  })
}

const logout = (req, res, next) => {
  const cookies = req.headers.cookie
  const prevToken = cookies?.split("=")[1]
  if (!prevToken) {
    return res.status(400).json({message: "invalid token"})
  }
  jwt.verify(String(prevToken), JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({message: "Authentication failed"})
    }
    res.clearCookie(`${user._id}`)
    req.cookies[`${user._id}`] = ""
    return res.status(200).json({message: "logged out successfully"})
  })
}

exports.getAllusers = getAllusers
exports.register = register
exports.login = login
exports.verifyToken = verifyToken
exports.getUser = getUser
exports.refreshToken = refreshToken
exports.logout = logout
