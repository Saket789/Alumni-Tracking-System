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



router.get('/', async (req,res) => {
    console.log('user....getdata');
    res.send('/loginpage');
});


router.post('/' , async (req,res) => {
    const { rollno , password } = req.body;
    // console.log(req.body);
    const user = await User.findOne({rollno:rollno})        
    .then( async (data)=>{
        if(data){
            // bcrypt.compare(req.body.password,data.password, await function(err, result){
                //     if(result){
                    //         console.log('LOgged In');       // problamatic
                    //         res.send("dsa");
                    //     }
                    //     else
                    //     console.log('Incorrect username or password');
                    // });
                if(data.password == req.body.password){
                    console.log('Welcome'); 
                    // req.session.rollno = rollno;      
                    res.send("dsa");
                }
                else
                    console.log('Incorrect username or password');        
            }
        else{
            // console.log(data);
            console.log('Incorrect username or password !!!');
        }
    })
    .catch((err)=>{
    	console.log(err);
        // console.log('Um, some error in app.js ');
    })
})


module.exports = router ;