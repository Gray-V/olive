import React from 'react';
import './css/dashboard.css';

function Dashboard() {
    return (
        <div className="in-progress-container">
            <h1>We're Working on It!</h1>
            <p>This section of our website is currently under development.</p>
            <p>Stay tuned for updates, or enter your email below to be notified when we're ready:</p>
            <form className="notify-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Notify Me</button>
            </form>
        </div>
    );
}

export default Dashboard;
