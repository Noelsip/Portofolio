import React, { useContext } from 'react';
// import { motion } from 'framer-motion';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData';
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';

import './About.css';

function About() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
                <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
                <div className="style-line" style={{backgroundColor: theme.primary}}></div>
                <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <ScrollAnimation
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="about-description"
                >
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color:theme.tertiary80}}>{aboutData.description1}<br/><br/>{aboutData.description2}</p>
                </ScrollAnimation>
                
                <ScrollAnimation
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="about-img"
                >
                    <img 
                        src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}  
                        alt="" 
                    />
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default About;