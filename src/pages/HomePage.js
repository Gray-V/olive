import React from 'react';
import './Home.css'; 
import calendar from './calendar.png';

function HomePage() {
  return (
    <div className="home-container">
      <section className="welcome-section">
        <h1>Meet Olive!</h1>
        <p>Olive is an AI-powered calendar assistant that learns your productivity habits over time to ensure you complete your highest priority tasks in an efficient and timely manner. Try Olive for free today!</p>
        <button className="signup-btn">Sign up for Free</button>
      </section>
      <div className="combined-section">
        <div className="features">
          <div className="feature">
            <button>Intelligent Scheduling</button>
            <p>Olive uses machine learning algorithms to analyze your productivity habits and schedule your tasks accordingly.</p>
          </div>
          <div className="feature">
            <button>Task Prioritization</button>
            <p>Olive helps you prioritize your tasks based on their importance and urgency to ensure you complete them in a timely manner.</p>
          </div>
          <div className="feature">
            <button>Real-time Notifications</button>
            <p>Olive sends you real-time notifications to remind you of your upcoming tasks and deadlines.</p>
          </div>
        </div>
        <div className="use-case-section">
          <img src={calendar} alt="Calendar" className="calendar" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
