import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

function Navb() {
  return (
    <div>
      <Nav style={{padding:"50px", wordSpacing: "20px"}} >
        <button style={{background : "#AFFAFF", padding:"10px", marginLeft:"-50px", borderRadius : "10px"}} ><NavLink  href="/dashboardpage" > DashBoard </NavLink></button>    
        <button style={{background : "#AFFAFF", padding:"10px", marginLeft:"20px", borderRadius : "10px"}} ><NavLink href="/passwordChange"> Password Change </NavLink></button>    
        <button style={{background : "#AFFAFF", padding:"10px", marginLeft:"20px", borderRadius : "10px"}} ><NavLink href="/ProfileUpdate"> Profile Update</NavLink> </button>
        <button style={{background : "#AFFAFF", padding:"10px", marginLeft:"20px", borderRadius : "10px"}} > <NavLink href="/About"> About </NavLink> </button>
        <button style={{background : "#AFFAFF", padding:"10px", marginLeft:"20px", borderRadius : "10px"}} > <NavLink href="/logout"> Logout </NavLink></button>
      </Nav>
    </div>
  );
}

export default Navb;
