import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <img src="logo.png" alt="Erin Logo" className="logo" />
      <div className="links">
        <NavLink exact activeClassName="active" to="/">
          Welcome
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
        <NavLink activeClassName="active" to="/services">
          Services
        </NavLink>
        <NavLink activeClassName="active" to="/client_forms">
          Client Forms
        </NavLink>
        <NavLink activeClassName="active" to="/contact">
          Contact
        </NavLink>
      </div>
    </div>
  );
}
