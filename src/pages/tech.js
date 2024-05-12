import React from 'react';
import './css/tech.css'; 
import oliveLogo from '../olive-logo.png';
import calendarImage from './images/calendar.png';
import classes from './images/class.jpeg';
import extractor from './images/extractor.jpeg';
import features from './images/features.jpeg';

const Technology = () => {
    return (
        <div className="technology-page">
            <div className="top-section">
                <div className="intro-text">
                    <div className="text-bubble">
                        <h1>Hi, I am Olive!</h1>
                        <p>I am an AI-powered calendar assistant that learns your productivity habits over time to ensure you complete your highest priority tasks in an efficient and timely manner.</p>
                    </div>
                    <button className="signup-button">Sign up for Free</button>
                </div>
                <div className="olive-image-wrapper">
                    <img src={oliveLogo} alt="Olive the Assistant" />
                </div>
            </div>

            <div className="content-section">
                <h2>Our Product</h2>
                <div className="tech-details">
                    <img src={calendarImage} alt="Our Calendar" className="calendar-image" />
                    <div className="graphs-and-demos">
                        <p>Here is a prediction of what our calendar will look like soon! Our team is currently working on a product that we are very proud of and all believe in.</p>
                    </div>
                </div>
                <h2>Extractor Overview</h2>
                <div className="tech-details">
                  <div className="graphs-and-demos">
                        <p>Here is our basic feature extractor — it organizes all current events by type, specific to the hour they start at, and specifically for tasks, we also track days to its deadline. This will inform our RL agent, Olive, to then attribute rewards from our complex reward function with features that get activated at some state of the calendar. Over time, the weights associated with these features will converge towards an optimal policy.</p>
                    </div>
                    <img src={extractor} alt="extractor" className="calendar-image" />
                </div>
                <h2>Class Overview</h2>
                <div className="tech-details">
                    <img src={classes} alt="classes" className="calendar-image" />
                    <div className="graphs-and-demos">
                        <p>Here is an overview of the current implementation of our custom calendar object. It includes simple methods such as adding and removing events, but will also include custom hash and equality functions to make sure appropriate storage within the context of getting an accurate successor state.</p>
                    </div>
                </div>
                <h2>Features</h2>
                <div className="tech-details">
                  <div className="graphs-and-demos">
                        <p>Here are the training parameters we are currently using. We decided to utilize an epsilon-decreasing Action Selection Rule (ASR), such that we assume the agent after a certain number of explorative iterations will begin to converge towards optimal policy. In the future, we may explore a state-specific dynamic ASR that will adjust specific to the context of the individual user, and therefore provide more accurate results faster. We have a high learning rate, and a high discount for our agent to have a greater recency bias.</p>
                    </div>
                    <img src={features} alt="features" className="calendar-image" />
                </div>
            </div>
        </div>
    );
};

export default Technology;
