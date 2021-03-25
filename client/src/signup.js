import React,{Component} from 'react'
import axios from 'axios'
import Nav1 from './Nav1.js';

// Not useful
class Signup extends Component
{
	constructor()
	{
		super()
		this.state={
			rollno:0,
			password:'',
			firstname:'',
			lastname:'',
			email:'',
			phone:''
		}
	}
	rollnoChange=(event)=>{
		this.setState({
			rollno:event.target.value
		})
	}
	passwordChange=(event)=>{
		this.setState({
			password:event.target.value
		})
	}

	submitchange=async (event)=>
	{
		event.preventDefault(); 
		console.log(this.state);

		axios.post('http://localhost:8080/signuppage',this.state)
		.then((data)=>{
			console.log("sent signup page") 
			this.props.history.push('/loginpage');
		})
		.catch((err)=>console.log("ohhh  "+err))
	}
	render()
	{
		return (
			<div>
				<Nav1 />
			<h1>Signup</h1>
			<form onSubmit={ this.submitchange }>
				Roll no : <input type="Number" value={this.state.rollno} onChange={this.rollnoChange}/><br/><br/>
				Password :<input type="text" value={this.state.password} onChange={this.passwordChange}/><br/><br/>
				<button type="Submit">Submit</button>
			</form>
		</div>
			)
	}
}
export default Signup

