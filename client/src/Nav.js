import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>

    <nav>
        <ul className="nav-links">
            <Link to="/homepage">
                <li>Home</li>
            </Link>
            <Link to="/loginpage">
                <li>Login</li>
            </Link>
            <Link to="/signuppage">
                <li>Sign Up </li>
            </Link>
            <Link to="/passwordChange">
                <li>passwordChange</li>
            </Link>
            <Link to="/ProfileUpdate">
                <li>Profile Update</li>
            </Link>
            <Link to="/About">
                <li>About</li>
            </Link>
            <Link to="/Logout">
                <li>Logout</li>
            </Link>
            <br/>
        </ul>
    </nav>
    <h3>click any link to parse </h3>
    </div>
  );
}

export default Nav;
