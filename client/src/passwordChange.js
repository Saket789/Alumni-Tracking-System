import React,{Component} from 'react'
import axios from 'axios'
import Navb from './Nav';

class PasswordChange extends Component
{
	constructor()
	{
		super()
		this.state={
			oldpassword:'',
			password:'',
			newpassword:''
		}
	}   
	oldpasswordChange=(event)=>{
		this.setState({
			oldpassword:event.target.value
		})
	}
	passwordChange=(event)=>{
		this.setState({
			password:event.target.value
		})
	}
	newpasswordChange=(event)=>{
		this.setState({
			newpassword:event.target.value
		})
	}

	submitchange=async (event)=>
	{
		event.preventDefault();
		console.log(this.state);
		await axios.post('http://localhost:8080/passwordChange',this.state)
		.then((data)=>{
			console.log("sent signup page") 
			this.props.history.push('/loginpage')
		})
		.catch((err)=>console.log("ohhh  "+err))
	}
	render()
	{
		return (
			<div>
			<Navb />
			<h1>Change Password</h1>
			<form onSubmit={this.submitchange}>
				Enter Current Password : <input type="text" value={this.state.oldpassword} onChange={this.oldpasswordChange}/><br/><br/>
				Enter New Password : <input type="text" value={this.state.password} onChange={this.passwordChange}/><br/><br/>
				Again Enter New Password : <input type="text" value={this.state.newpassword} onChange={this.newpasswordChange}/><br/><br/>
				<button type="Submit">Submit</button>
			</form>
		</div>
		)
	}
}
export default PasswordChange


// here we will search by rollno
// then we will check password
// if the password is correct
// then we will compare both new password
// if they are equal than we will update password














