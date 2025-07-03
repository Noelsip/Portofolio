import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';

import './Education.css'
import EducationCard from './EducationCard';

import { educationData } from '../../data/educationData'

function Education() {
    const { theme } = useContext(ThemeContext);
    
    return (
        <ScrollAnimation className="education" id="resume" style={{backgroundColor: theme.secondary}}>
            <div className="education-body">
                <ScrollAnimation
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="education-description"
                >
                    <h1 style={{color:theme.primary}}>Pendidikan</h1>
                    {educationData.map((edu, index) => (
                        <ScrollAnimation
                            key={edu.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <EducationCard 
                                id={edu.id}
                                institution={edu.institution}
                                course={edu.course}
                                startYear={edu.startYear}
                                endYear={edu.endYear}
                            />
                        </ScrollAnimation>
                    ))}
                </ScrollAnimation>
                
                <ScrollAnimation
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="education-image"
                >
                    <img src={theme.eduimg} alt="education-img"/>
                </ScrollAnimation>
            </div>
        </ScrollAnimation>
    )
}

export default Education;