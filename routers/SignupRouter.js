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
    console.log("register chala");
    res.send();
    // res.render('../client/signup');
})


  
  // route for user signup
  
  router.post('/' , (req, res) => {
    var user = new User({
      rollno: req.body.rollno,
      password:req.body.password,
    });
    user.save((err, docs) => {
      if (err) {
            console.log("error here");
            res.redirect("/signuppage");
      } else {
            console.log(docs)
            console.log("no error")
            res.send();
      }
    });
});




module.exports = router ;