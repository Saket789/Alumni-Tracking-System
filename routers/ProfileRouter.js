const express = require('express');
const mongoose = require("mongoose");
var cors = require('cors');
const router = express.Router();
const User = require('../models/user_Schema.js');
router.use(express.urlencoded({extended:true}));
var cors = require('cors');
router.use(cors({ origin : true, credentials : true }));
router.use(express.json({ extended: false }));
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const bcrypt = require('bcrypt');



router.get('/', async (req,res) => {
    console.log('user....getdata');
    res.send('/loginpage');
});




router.post('/' , async (req,res) => {
    // const {oldpassword, password, newpassword } = req.body;
    console.log(req.body);

    //  Here we are updating password without hashing it.

        const user = await User.findOneAndUpdate({rollno:req.body.rollno}, {
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            phone : req.body.phone,
            year : req.body.year,
            branch : req.body.branch
        })        
        .then( async (data)=>{
            res.send();
            console.log("Password Updated !!!");
        })
        .catch((err)=>{
        	console.log(err);
            console.log('Um, some error in updateRouter ');
        })
})







module.exports = router ;


