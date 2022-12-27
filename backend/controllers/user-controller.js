const { findOne } = require('../models/Student');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
const JWT_SECRET = "MY KEY";
/* const _ = require('lodash');
const config = require('config');
*/
/*

 async(req, res) => {
   const user = await User.findById(req.user._id).select('-password');
   res.json(user);
   
}

const registerUser = async (req, res) => {

    try {
      const { _id, name, email, password } = req.body;

      let user = await User.findOne({ email: email });
      if(user) return res.status(400).json("teacher already registered");
      
      const newUser = new User(  _.pick(req.body, ['_id', 'name', 'email', 'password'])); 
      const salt = await bcrypt.genSalt(10);
      newUser.password =await bcrypt.hash(newUser.password, salt);
      await newUser.save(); 

      const token = newUser.generateAuthToken();

      res.header('x-auth-token', token).json({success:true, data:  _.pick(newTeacher, ['_id', 'name', 'email']) });
      
   } catch (err) {
      res.status(400).json({success: false, message:err.message});
   } 
 };
 
 exports.registerUser = registerUser; 
 */


const register = async(req, res, next) => {
   let existingUser;
   const {name, email, password} = req.body;

   try{
      existingUser = await User.findOne({email: email});
   } catch (err) {
      console.log(err);
   }

   if(existingUser) {
      return res.status(400).json({message: "user exists already! Login instead"});
   }


   const salt = bcrypt.genSaltSync(10);

   const hashedPassword = bcrypt.hashSync(password, salt)
   const user = new User({
      name,
      password: hashedPassword,
      email
   })

   try{
      await user.save()
   } catch(err) {
      console.log(err)
   }
   return res.status(200).json({message: user})
}

const login = async(req, res, next) => { 
   const {email, password} = req.body;
    let existingUser;

   try {
      existingUser = await User.findOne({email: email});
   } catch(err) {
      console.log(err);
   }

   if(!existingUser) {
      return res.status(200).json({message: "No user found. Register here."});
   }
   const isPasswwordCorrect = bcrypt.compare(password, existingUser.password);
   if(!isPasswwordCorrect) {
     return res.status(400).json({message: "Invalid password."}); 
   }

   const token = jwt.sign({id: existingUser._id}, JWT_SECRET, {
      expiresIn: "300s"
   })

   res.cookie(String(existingUser._id), token, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 30),
      httpOnly: true,
      sameSite: 'lax',
   })


   return res.status(200).json({message:"Success logged in.", user: existingUser, token});

}

const verifyToken = (req, res, next) => {

   const cookies = req.headers.cookie;
   const token = cookies.split("=")[1]
   console.log(token);
  
   if(!token) {
      return res.status(404).json({ message:"No token found" });
   }
   jwt.verify(String(token), JWT_SECRET, (err, user) => {
      if(err) {
         return res.status(400).json({ message: "Invalid token" });
      } 
      console.log(user.id);
      req.id =user.id
   })
   next();
}


const getUser = async (req, res, next) => {
   const userId = req.id;
   let user;

   try {
      user = await User.findById(userId, "-password");
   } catch (err) {
      return new Error(err.message);
   }
   if(!user) {
      return res.status(404).json({message: "User not found"})
   }

   return res.status(200).json({user})
}

const refreshToken = async (req, res, next) => {
   const cookies = req.headers.cookie;
   const prevToken = cookies.split("=")[1]
   if(!token) {
      return res.status(400).json({message: "invalid token"})
   }
   jwt.verify(String(prevToken), JWT_SECRET, (err, user) => {
      if(err) {
         return res.status(403).json({message: "Authentication failed"})
      }

      res.clearCookie(`${user.id}`);
      req.cookie[`${user.id}`] = "";

      const token = jwt.sign({id: user.id}, JWT_SECRET, {
         expiresIn: "300s"
      })
      res.cookie(String(user.id), token, {
         path: "/",
         expires: new Date(Date.now() + 1000 * 30),
         httpOnly: true,
         sameSite: 'lax',
      })

      req.id = user.id;
      next();
   })

}
exports.register = register;
exports.login = login;
exports.verifyToken = verifyToken;
exports.getUser = getUser;
exports.refreshToken = refreshToken;