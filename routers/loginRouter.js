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
    // res.send('/loginpage');
});

    // route for user Login
    router.post('/' , async (req, res) => {
        var rollno = req.body.rollno,
        password = req.body.password;
  
        try {
          var user = await User.findOne({ rollno: rollno }).exec();
          if(!user) {
              res.redirect("/loginpage");
          }
          user.comparePassword(password, (error, match) => {
              if(!match) {
                res.redirect("/loginpage");
              }
          });
          res.send(user);
      } catch (error) {
        console.log(error)
      }
    });




module.exports = router ;


