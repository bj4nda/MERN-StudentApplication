const express = require('express')
const {register, login, verifyToken, getUser, refreshToken} = require("../controllers/user-controller");
const router = require('./allroutes');
const router1 = express.Router();

router1.post('/register', register);

router1.post('/login', login);

router1.get('/user', verifyToken, getUser);

router1.get('/refresh', refreshToken, verifyToken, getUser);

// verify token 

module.exports = router1;