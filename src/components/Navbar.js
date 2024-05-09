import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="logo" />
        <div className="nav-links">
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          {/* <NavLink to="/web-designs" activeClassName="active">Web designs</NavLink>
          <NavLink to="/mobile-designs" activeClassName="active">Mobile designs</NavLink> */}
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </div>
      </div>
      <div className="auth-buttons">
        <button className="sign-up">Sign up</button>
        <button className="sign-in">Sign in</button>
      </div>
    </nav>
  );
}

export default Navbar;
