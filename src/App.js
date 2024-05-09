import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
// import WebDesignsPage from './pages/WebDesignsPage';
// import MobileDesignsPage from './pages/MobileDesignsPage';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/web-designs" element={<WebDesignsPage />} />
          <Route path="/mobile-designs" element={<MobileDesignsPage />} /> */}
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
