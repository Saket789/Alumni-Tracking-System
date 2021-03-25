import React,{Component} from 'react'
import axios from 'axios'
import Navb from './Nav';
import ReactSession from 'react-client-session';

class ProfileUpdate extends Component
{
	constructor()
	{
		super()
		this.state={
			rollno:0,
			firstname:'',
			lastname:'',
			email:'',
			phone:'',
			year:2000,
			branch:'CSE'
		}
	}
	rollnoChange=(event)=>{
		this.setState({
			rollno:event.target.value
		})
	}
	firstnameChange=(event)=>{
		this.setState({
			firstname:event.target.value
		})
	}
	lastnameChange=(event)=>{
		this.setState({
			lastname:event.target.value
		})
	}
	emailChange=(event)=>{
		this.setState({
			email:event.target.value
		})
	}
	phoneChange=(event)=>{
		this.setState({
			phone:event.target.value
		})
	}
	yearChange=(event)=>{
		this.setState({
			year:event.target.value
		})
	}
	branchChange=(event)=>{
		this.setState({
			branch:event.target.value
		})
	}

	submitchange=async (event)=>
	{
		event.preventDefault();
		console.log(this.state);
		
		await axios.post('http://localhost:8080/profileupdate',this.state)
		.then((data)=>{
			ReactSession.get("username");
			console.log("sent profileupdate page") 
			this.props.history.push('/homepage')
		})
		.catch((err)=>console.log("ohhh  "+err))
	}
	render()
	{
		return (
			<div>
				<Navb />
			<h1>Profile Update</h1>
			<form onSubmit={this.submitchange}>
				rollno : <input type="Number" value={this.state.rollno} onChange={this.rollnoChange}/><br/>
				First Name : <input type="text" value={this.state.firstname} onChange={this.firstnameChange}/><br/>
				Last Name :<input type="text" value={this.state.lastname} onChange={this.lastnameChange}/><br/>
				Email :<input type="text" value={this.state.email} onChange={this.emailChange}/><br/>
				Mob. No: <input type="text" value={this.state.phone} onChange={this.phoneChange}/><br/>
				Graduation Year <input type="number" value={this.state.year} onChange={this.yearChange}/><br/>
				<select value={this.state.branch} onChange={this.branchChange}>
					<option value='CSE'>CSE</option>
					<option value='ME'>ME</option>
					<option value='CE'>CE</option>
					<option value='EE'>EE</option>
					<option value='ECE'>ECE</option>
				</select><br/><br/>
				<button type="Submit">Submit</button>
			</form>
			
		</div>
			)
		
	}
}
export default ProfileUpdate;

