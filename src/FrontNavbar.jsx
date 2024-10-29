import React from 'react';
import aitlogo from './images/front.png';
import './NavigationBar.css'; // Import your CSS file
import { NavLink } from 'react-router-dom';
const FrontNavbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
      <img src={aitlogo} alt="AIT Logo" className='logo-img'/>
      </div>
      <div className="buttons-container">
        <NavLink to="/entry" className="nav-link ">Entry</NavLink>
        <NavLink to="/register" className="nav-link ">Register</NavLink>
        <NavLink to="/admin" className="nav-link">Admin</NavLink>
        <NavLink to="/vis-request" className="nav-link">Visitor Request</NavLink>
        <NavLink to="/"      className="nav-link">Home</NavLink>
      </div>
    </div>
  );
};

export default FrontNavbar;
