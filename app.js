const express = require('express')
const app = express()
const User = require('./models/user_Schema.js')
const mongoose = require("mongoose");
var cors = require('cors');
const ProfileRouter = require('./routers/ProfileRouter');
const HomeRouter = require('./routers/HomeRouter');
const loginRouter = require('./routers/loginRouter');
const SignupRouter = require('./routers/SignupRouter');
const UpdateRouter = require('./routers/UpdateRouter');
const session = require('express-session');
const flash = require('connect-flash');
const bcrypt = require('bcrypt');


//      Routers
app.use('/homepage',HomeRouter);
app.use('/loginpage',loginRouter);
app.use('/signuppage',SignupRouter);
app.use('/passwordChange',UpdateRouter);
app.use('/profileupdate',ProfileRouter);


mongoose.connect('mongodb+srv://DbUser:DbUser@cluster0.apwot.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
    	console.log('Database connected');
    })
    .catch((err)=>{
    	console.log(err);
    })

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));


// Session
const sessionOptions = {secret: 'thisisnotagoodsecreat', resave : false, saveUninitialized: false } ;
app.use(session(sessionOptions));
app.use(flash());   // we use it before redirect



app.listen(8080,()=> {
    console.log('server is listening');
})


