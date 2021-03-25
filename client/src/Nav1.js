import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

function Nav1() {
  return (
    <div>
      <Nav style={{padding:"50px", wordSpacing: "20px"}} >
        <button style={{background : "#AFFAFF", padding:"10px", marginLeft:"-50px", borderRadius : "10px"}} ><NavLink  href="/homepage"> Home Page </NavLink></button>    
        <button style={{background : "#AFFAFF", padding:"10px", marginLeft:"20px", borderRadius : "10px"}} ><NavLink href="/loginpage"> Login </NavLink></button>    
        <button style={{background : "#AFFAFF", padding:"10px", marginLeft:"20px", borderRadius : "10px"}} > <NavLink href="/signuppage"> Signup </NavLink></button>
      </Nav>
    </div>
  );
}

export default Nav1;
