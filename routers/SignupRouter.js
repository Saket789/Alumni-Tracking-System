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
    // res.render('../client/signup');
})

router.post('/', async (req,res) => {
    // const { rollno, password } = req.body;
    // const hash = await bcrypt.hash(password,12);
    // console.log(password);
    // console.log(hash);
    // const user = new User({
    //     rollno,
    //     password : hash
    // })
    // await user.save();
    User.create(req.body);
    console.log("Sign Up done");
    res.send("\n  Signup page  working  \n");
})




// router.get('/', async (req,res) => {
//     console.log('user....getdata');
//     const users = await Schema.find({})
//     .then((user) => {
//         console.log(users);
//         // res.send(users);
//     })
// });

// router.post('/',(req,res)=>{
//     console.log(req.body.rollno);
//     console.log(req.body.password);
//     User.create(req.body);

    //  Actually we have to find and match password here

    
// {    //  to update query 
//     const query = [{ "password": "saket" }];
//     const update = {
//     $push: {
//         // "User": {
//             "password" : "vajpai"
//         // }
//     }
//     };
//     const options = { "upsert": false };
//     User.updateOne(query, update)
//     .then(result => {
//     //   const { matchedCount, modifiedCount } = result;
//     //   if(matchedCount && modifiedCount) {
//         console.log(`Successfully added a new review.`)
//     //   }
//     })
//     .catch(err => console.error(`Failed to add review: ${err}`))
// }


    // User.updateOne({"password" : "saket"},{ "$push": { "password": 'vajpai'}}, {"options" : false});
    // res.redirect('../client/src/signup.js');
    // res.sendFile('passwordChange.js', {root: path.join(__dirname, '../client/src/')});
    // res.render('./client/src/signup.js');
// });


// router.post('/', async(res,req) => {
//     console.log('user....Router');
//     console.log(req.body.firstname);
//     const {firstname, lastname } = req.body ;
//     const newstudent = new Schema({
//         firstname: firstname,
//         lastname: lastname
//         // phone: phone,
//         // password: password,
//         // confirmpassword: confirmpassword,
//     });
//     await newstudent.save()
//     .then(() => {
//         console.log('Submitted');
//     })
//     .catch(err => console.log(err));
// });

module.exports = router ;