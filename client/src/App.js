import React from 'react';
import ProfileUpdate from './profileUpdate';
import PasswordChange from "./passwordChange";
import Home from './Home.js';
import Login from './login.js';
import Signup from './signup.js';
import Nav from './Nav.js';
import About from './about.js';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
        <div className="App" style={{marginLeft: '40%', marginTop: '2%'}}>
            <Nav />
            {/* <h1>This is home page</h1> */}
            <Switch>
                <Route exact path="/homepage" component={Home}  />
                <Route exact path = "/loginpage" component={Login} />
                <Route exact path = "/signuppage" component={Signup} />
                <Route exact path = "/passwordChange" component={PasswordChange} />
                <Route exact path = "/profileupdate" component={ProfileUpdate} />
                <Route exact path = "/about" component={About} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
