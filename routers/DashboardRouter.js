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


router.get('/', (req,res) => {
    if (req.session.user && req.cookies.user_sid){
        console.log("dashboard chala");
        // res.render('../client/signup');
        res.send("\n Dash Board page id working  \n");
    }
    else{
        console.log("dashboard nhi chala");
        res.send("\n Dash Board page id not working  \n");
        // res.redirect('/signuppage');
    }
})

router.post('/', async (req,res) => {
    if (req.session.user && req.cookies.user_sid){
        console.log(" Dash Board page ");
        res.send("\n Dash Board page id working  \n");
    }
    else{
        console.log("Dash Board page nhi chala");
        res.send("\n Dash Board page id not working  \n");
        // res.redirect('/loginpage');
    }
})


module.exports = router ;