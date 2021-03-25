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

router.get('/', async(req,res) => {
    console.log('Get in about page worked !!!');
    res.send(data);
})


router.post('/', async (req,res) => {
    const { rollno } = req.body;
    console.log('user....getdata ' + rollno);
    const user = await User.findOne({rollno : rollno})        
    .then( async (data)=>{
        if(data){
                console.log('Data found in About Page !!!');
                // console.log(data);      
            }
        else{
            // console.log(data);
            console.log('Data not found in About Page !!!');
        }
        res.send(data);
    })
    .catch((err)=>{
    	console.log(err);
        // console.log('Um, some error In app.js ');
    })
    // res.send('/loginpage');
});


module.exports = router ;



