import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import profilePhoto from '../assets/profile-photo.jpg'; // Adjust the path if necessary

const Home = () => {
    return (
        <div className="home-container">
            <section className="hero-section">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, type: 'spring' }}
                >
                    <h1>Welcome to My Portfolio</h1>
                    <p>I’m Adarash Kumar Singh, a passionate developer with a love for creating impactful digital experiences.</p>
                    <motion.a 
                        href="/path/to/your/cv.pdf"  // Replace with the path to your CV file
                        className="cta-button"
                        download="Adarash_Kumar_Singh_CV.pdf" // Optional: rename the file when downloaded
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                    >
                        <i className="fas fa-download"></i> Download CV
                    </motion.a>
                </motion.div>
                <motion.div
                    className="hero-photo"
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 1.2, delay: 0.5, type: 'spring' }}
                >
                    <img 
                        src={profilePhoto} 
                        alt="Adarash Kumar Singh" 
                        className="profile-photo" 
                    />
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
