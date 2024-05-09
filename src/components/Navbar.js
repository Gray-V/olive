import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink to="/" className='home-button' > <img className="logo" src={logo} alt="'" /></NavLink>
        <div className="nav-links">
          <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
          <NavLink to="/technology" activeClassName="active">Technology</NavLink>
          <NavLink to="/pricing" activeClassName="active">Pricing</NavLink>
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
