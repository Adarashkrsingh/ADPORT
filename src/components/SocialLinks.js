// src/components/SocialLinks.js
import React from 'react';

const SocialLinks = () => {
    return (
        <div className="social-links">
            <a href="https://www.instagram.com/adarash" target="_blank" rel="noopener noreferrer">
                <img src="/instagram-logo.png" alt="Instagram" />
            </a>
            <a href="https://github.com/adarash" target="_blank" rel="noopener noreferrer">
                <img src="/github-logo.png" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/adarash" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin-logo.png" alt="LinkedIn" />
            </a>
        </div>
    );
};

export default SocialLinks;
