const mongoose = require("mongoose");

const employeeschema = new mongoose.Schema({
    firstname : {
        type : String,
        // required : true
    },
    lastname : {
        type : String,
        // required : true
    },
    rollno : {
        type : Number,
        // unique : true
        // required : [true, 'rollno cannot be blank']
    },
    password : {
        type : String,
        // required : [true, 'password cannot be blank']
    },
    email : {
        type : String,
        // required : true,
        // unique : true
    }, 
    gender : {
        type : String,
        // required : true
    },
    phone : {
        type : String,
        // required : true,
        // unique : true
    },
    dob : {
        type : Date,
        // required : true
    },
    year : {
        type : Number,
        // required : true
    },
    branch : {
        type : String,
        enum:['CSE','EE','CE','ME','ECE','MATH','PHY','CHEM']
        // unique : true
    }
    // image add karna hai
});

// now we need to make connection
// collection name in singular form and First capital letter
const User = mongoose.model('Register',employeeschema);

module.exports = User;