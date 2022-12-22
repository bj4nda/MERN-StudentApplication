const Teacher = require('../models/Teacher');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Joi = require('joi');

router.post('/login', async(req, res) => {
        
    try {
        const { email, password } = req.body;

        let teacher = await Teacher.findOne({ email: email });
        if(!teacher) return res.status(400).json("invalid email or password");

        const validPasword = await bcrypt.compare(password, teacher.password);
        
        if(!validPasword) return res.status(400).json("invalid email or password"); 
        
        const token = teacher.generateAuthToken();
        res.json(token);

    } catch (err) {
        res.status(400).json({success: false, message:err.message});
    }
 });


 function validate(req){
    const schema = Joi.object({
        email: Joi.string().required().min(5).max(255).email(),
        password: Joi.string().alphanum().min(5).max(255)
        })

        return Joi.validate(req, schema);
 }  

module.exports = router;