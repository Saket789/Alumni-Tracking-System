import React,{Component} from 'react'
import axios from 'axios'
import ProfileUpdate from './profileUpdate';
import PasswordChange from "./passwordChange";
import Login from './login.js';
import Signup from './signup.js';
import Navb from './Nav.js';
import About from './about.js';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 


class Dashboard extends Component
{
	render()
	{
		return (
			<div>
            <Navb />
			<h1> This is Dashboard page just updated</h1>
		</div>
		)
	}
}
export default Dashboard




