import React from 'react';
import './css/home.css'; 
import oliveImage from './olive.png'; 
import circle from './circle.png';
// import { NavLink } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page-container">
      <header className="landing-header">
        <div className="logo">Olive</div>
      </header>
      <main className="main-content">
        <h1>Meet Olive</h1>
        <h2>An AI Calendar Assistant</h2>
        <p>Olive is an intelligent scheduling app, effortlessly organizing your tasks and appointments while learning your habits for optimal productivity.</p>
        {/* <NavLink to="/dashboard" ClassName="try-for-free">Sign up for our Mailing List</NavLink> */}
        <img src={oliveImage} alt="Olive" className="olive-image" />
        <img src={circle} alt="Circle" className="circle" />
      </main>
    </div>

  );
}

export default LandingPage;
