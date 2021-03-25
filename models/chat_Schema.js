const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

mongoose.connect('mongodb+srv://DbUser:DbUser@cluster0.apwot.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Database connected');
})
.catch((err)=>{
    console.log(err);
})

const chatschema = new mongoose.Schema({
    rollno : {
        type : Number,
        // unique : true
        // required : [true, 'rollno cannot be blank']
    },
    data : {
        type : String
    },
    tags : {
        type : String      
    }
});



const Userchat = mongoose.model('Register',chatschema);

module.exports = Userchat;