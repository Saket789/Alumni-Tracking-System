import React,{Component} from 'react'
import axios from 'axios'

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
			this.props.history.push('/homepage')
		})
		.catch((err)=>console.log("ohh somee error  "+err))
	}
	render()
	{
		return (
			<div>
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





















// import React, {Component} from 'react';
// import './App.css';


// // function About() {
// class About extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       greeting: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   // handleChange(event) {
//   //   this.setState({ name: event.target.value });
//   // }

//   handleSubmit(event) {
//     event.preventDefault();
//     fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
//       .then(response => response.json())
//       .then(state => this.setState(state));
//   }

//   render(){
//   return (
//     <div className="About">
//         <h1>About page</h1>
      
//         {/* <div class="box" style="marginLeft: 800px; marginTop: -200px"> */}
//         <div class="box" >
//          <h1>Registration Form</h1>
//          {/* <form action={"/aboutpost"} method="POST"> */}
//          <form action={this.handleSubmit} method="POST">
//            <div class="input-box">
//              <input
//                type="text"
//                name="firstname"
//                id="name"
//                autocomplete="off"
//             //    {{!-- required --}}
//              />
//              <label for="firstname">First name</label>
//            </div>
//            <div class="input-box">
//              <input
//                type="text"
//                name = "lastname"
//                autocomplete="off"
//             //    {{!-- required --}}
//              />
//              <label for="lastname">Last name</label>
//            </div>
//            <div class="input-box">
//              <input
//                type="text"
//                name = "phone"
//                autocomplete="off"
//             //    {{!-- required --}}
//              />
//              <label for="phone">Mobile no</label>
//            </div>
//            <div class="input-box">
//              <input
//                type="password"
//                name = "password"
//                autocomplete="off"
//             //    {{!-- required --}}
//              />
//              <label for="password">Password</label>
//            </div>
//            <div class="input-box">
//              <input
//                type="password"
//                name = "confirmpassword"
//                autocomplete="off"
//             //    {{!-- required --}}
//              />
//              <label for="confirmpassword">Confirm Password</label>
//            </div>
//            <input type="submit" value="Signup" />
//          </form>
//        </div>

//     {/* </div> */}
//     </div>
//   );
//   }
// }

// export default About;
