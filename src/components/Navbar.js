import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <button className="menu-icon" onClick={toggleMenu}>☰</button>
        <NavLink to="/" className='home-button' > <img className="logo" src={logo} alt="Logo" /></NavLink>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
          {/* <NavLink to="/technology" activeClassName="active">Technology</NavLink> */}
          <NavLink to="/pricing" activeClassName="active">Pricing</NavLink>
        </div>
      </div>
      <div className="auth-buttons">
        <div className="sign-up">
        <NavLink to="/dashboard" activeClassName="active">Sign up for our Mailing List</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
