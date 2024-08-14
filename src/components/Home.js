import React from 'react';
import './Home.css';
import profilePhoto from '../assets/profile-photo.jpg'; // Update the path as needed

const Home = () => {
    return (
        <div className="home-container">
            <div className="hero-section">
                <div className="hero-text">
                    <h1>Welcome to Adarsh Kumar Singh's Portfolio</h1>
                    <p>
                    A driven third-year Bachelor's of Engineering student, specializing in Computer Science Engineering. With a passion for project management and problem-solving, I bring a diverse skill set to the table. Beyond the realm of technology, I embrace my creative side as a self taught artist, seeking innovative solutions in all aspects of life.

                    </p>
                    <a 
                        href="/path/to/cv.pdf" 
                        download="Adarsh_Kumar_Singh_CV.pdf"
                        className="cta-button"
                    >
                        <i className="fas fa-download"></i> Download CV
                    </a>
                </div>
                <div className="hero-photo">
                    <img src={profilePhoto} alt="Adarsh Kumar Singh" className="profile-photo" />
                </div>
            </div>
        </div>
    );
};

export default Home;
