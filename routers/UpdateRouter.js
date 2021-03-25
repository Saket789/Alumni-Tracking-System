const express = require('express');
const mongoose = require("mongoose");
// const router = express();
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

const sessionOptions = {secret: 'thisisnotagoodsecreat', resave : false, saveUninitialized: false } ;
router.use(session(sessionOptions));



router.get('/', async (req,res) => {
    console.log('user....getdata');
    res.send('/loginpage');
});


router.post('/' , async (req,res) => {
    const {oldpassword, password, newpassword } = req.body;
    console.log(req.body);
    // const hashOld = await bcrypt.hash(oldpassword,12);
    // const hash = await bcrypt.hash(password,12);     
    // console.log(hashOld);

    // The problem here is that hash values are not matching
    // hashold in findoneupdate in never found

    // hash value of asdf provided by signup to monodb is differnt && here it is different




    if(password == newpassword){
        const user = await User.findOneAndUpdate({password:oldpassword}, {password : newpassword})        
        .then( async (data)=>{
            res.send();
            console.log("Password Updated !!!");
        })
        .catch((err)=>{
        	console.log(err);
            console.log('Um, some error in updateRouter ');
        })
    }
    else{ 
        console.log('Password does not match');
    }
})


module.exports = router ;