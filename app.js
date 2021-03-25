const express = require('express');
const app = express();
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cookieParser = require("cookie-parser");
var morgan = require("morgan");
var cors = require('cors');
const ProfileRouter = require('./routers/ProfileRouter');
const HomeRouter = require('./routers/HomeRouter');
const DashboardRouter = require('./routers/DashboardRouter');
const loginRouter = require('./routers/loginRouter');
const SignupRouter = require('./routers/SignupRouter');
const UpdateRouter = require('./routers/UpdateRouter');
const AboutRouter = require('./routers/AboutRouter');
const expressValidator = require('express-validator');
const User = require('./models/user_Schema.js');
// const Userchat = require('./models/chat_Schema');
const session = require('express-session');
const flash = require('connect-flash');
const bcrypt = require('bcrypt');
const { static } = require('express');
const path = require('path');

app.use(express.static(path.join('./client/public')));
// set morgan to log info about our requests for development use.
app.use(morgan("dev"));

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));

// rsession.setStoreType("localStorage");

// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

app.use(
    session({
      key: "user_sid",
      secret: "somerandonstuffs",
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 600000,
      },
    })
  );


// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
      res.clearCookie("user_sid");
    }
    next();
  });

// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
      res.redirect("/dashboard");
    } else {
      next();
    }
  };
  

//      Routers
app.use('/homepage',HomeRouter);
app.use('/dashboardpage',DashboardRouter);
app.use('/loginpage',loginRouter);
app.use('/signuppage',SignupRouter);
app.use('/passwordChange',UpdateRouter);
app.use('/profileupdate',ProfileRouter);
app.use('/aboutuspage',AboutRouter);


app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));


// Session (always use after body parse)


// route for Home-Page
app.get("/", sessionChecker, (req, res) => {
    res.redirect("/loginpage");
  });
  

  
  // route for user logout
  app.get("/logout", (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
      res.clearCookie("user_sid");
      res.redirect("/");
    } else {
        res.send();
    //   res.redirect("/loginpage");
    }
  });



// route for handling 404 requests(unavailable routes)
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!");
  });
  


app.listen(8080,()=> {
    console.log('server is listening');
})


