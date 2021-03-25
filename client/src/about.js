import React,{Component} from 'react'
import axios from 'axios'
import Nav from './Nav.js';

class About extends Component
{
	constructor()
	{
		super()
		this.state={
			rollno:0,
			lists : []
		}
	}
	rollnoChange=(event)=>{
		this.setState({
			rollno:event.target.value
		})
	}
	
	submitchange=async (event)=>
	{
		event.preventDefault();
		console.log(this.state);
		await axios.post('http://localhost:8080/aboutuspage',this.state)
		.then((res)=>{
			console.log("sent login page") 
			console.log(res.data) 
			this.setState({
				lists : res.data
			})
			// this.props.history.push('/dashboardpage');
		})
		.catch((err)=>console.log("ohh somee error  "+err))
	}
	render()
	{
		const {lists} = this.state
		return (
			<div>
				<Nav />
			<h1>Aboutus Page</h1>
			<form onSubmit={this.submitchange}>
				Roll No : <input type="Number" value={this.state.rollno} onChange={this.rollnoChange}/><br/><br/>
				<button type="Submit">Submit</button>
			</form>
			 	
			<h2> Hello  {lists.firstname} {lists.lastname} !<br/></h2> 	
			<h1>Here is all your personal details</h1>
			<h3>Mobile no {lists.phone}</h3>
			<h3>Branch {lists.branch}</h3>
			<h3>Year {lists.year}</h3>
			{/* <alert>{lists.firstname} </alert> */}
		</div>
		)
	}
}

export default About

