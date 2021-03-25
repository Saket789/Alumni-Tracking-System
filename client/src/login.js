import React,{Component} from 'react'
import axios from 'axios'
import Nav1 from './Nav1.js';
import ReactSession from 'react-client-session';


class Login extends Component
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
		await axios.post('http://localhost:8080/loginpage',this.state)
		.then((data)=>{
			console.log("sent login page")
			// console.log(data)
			if(data.data.rollno){
				// ReactSession.set("username", "Bob");
				this.props.history.push('/profileupdate');
			}
			else
				this.props.history.push('/loginpage');
		})
		.catch((err)=>console.log("ohh somee error  "+err))
	}
	render()
	{
		return (
			<div>
				<Nav1 />
			<h1>Login</h1>
			<form onSubmit={this.submitchange}>
				Roll No : <input type="Number" value={this.state.rollno} onChange={this.rollnoChange}/><br/><br/>
				Password : <input type="text" value={this.state.password} onChange={this.passwordChange}/><br/><br/>
				<button type="Submit">Submit</button>
			</form>	
		</div>
		)
	}
}
export default Login


