import React, { useState } from 'react';
import './css/dashboard.css';
import { db } from './firebase-config'; 
import { collection, addDoc } from "firebase/firestore";

function Dashboard() {
    const [email, setEmail] = useState('');

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            alert("Please enter a valid email address.");
            return;
        }
        try {
            await addDoc(collection(db, "emails"), {
                email: email,
                timestamp: new Date()
            });
            alert("Email successfully added to our mailing list!");
            setEmail('');
        } catch (error) {
          alert(`Failed to add email: ${error.message}`);
        }
        
    };

    return (
        <div className="in-progress-container">
            <h1>We're Working on It!</h1>
            <p>This section of our website is currently under development. The first 1000 people to sign up for our email list will get a free year of Olive!</p>
            <p>Stay tuned for updates, or enter your email below to be notified when we're ready:</p>
            <form className="notify-form" onSubmit={handleEmailSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Notify Me</button>
            </form>
        </div>
    );
}

export default Dashboard;
