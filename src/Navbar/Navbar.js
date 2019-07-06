import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <img alt="Erin Logo" />
      <div className="links">
        <Link to="/">Welcome</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/client_forms">Client Forms</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
