import React from 'react';
import ProfileUpdate from './profileUpdate';
import PasswordChange from "./passwordChange";
import Home from './Home.js';
import Login from './login.js';
import Signup from './signup.js';
import Dashboard from './Dashboard.js';
import Navb from './Nav.js';
import About from './about.js';
import Logout from './components/Logout.js';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 

function App() {
  return (
    <Router>
        <div
         className="App" style={{marginLeft: '30%', marginTop: '0%'}}>
            <Switch>
                <Route exact path="/homepage" component={Home}  />               
                <Route exact path="/dashboardpage" component={Dashboard}  />               
                <Route exact path = "/loginpage" component={Login} />
                <Route exact path = "/signuppage" component={Signup} />
                <Route exact path = "/passwordChange" component={PasswordChange} />
                <Route exact path = "/profileupdate" component={ProfileUpdate} />
                <Route exact path = "/about" component={About} />
                {/* <Route exact path = "/logout" component={Logout} /> */}
            </Switch>
        </div>
    </Router>
  );
}

export default App;
