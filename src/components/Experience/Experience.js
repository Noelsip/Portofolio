import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { experienceData } from '../../data/experienceData';
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';

import './Experience.css';
import OrganizationCard from './OrganizationCard';
import WorkCard from './WorkCard';

function Experience() {
    const { theme } = useContext(ThemeContext);
    
    return (
        <ScrollAnimation className="experience" id="experience" style={{backgroundColor: theme.secondary}}> 
            {/* Section Pengalaman Organisasi & Kepanitian */}
            <div className="experience-body">
                <ScrollAnimation
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="experience-image"
                >
                    <img src={theme.expimg} alt="" />
                </ScrollAnimation>
                
                <ScrollAnimation
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="experience-description"
                >
                    <h1 style={{color: theme.primary}}>Pengalaman Organisasi & Kepanitian</h1>
                    {experienceData.organizationExperience.map((org, index) => (
                        <ScrollAnimation
                            key={org.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <OrganizationCard 
                                id={org.id}
                                position={org.position}
                                organization={org.organization}
                                startYear={org.startYear}
                                endYear={org.endYear}
                                type={org.type}
                                certificate={org.certificate}
                                description={org.description}
                            />
                        </ScrollAnimation>
                    ))}
                </ScrollAnimation>
            </div>

            {/* Section Pengalaman Pekerjaan */}
            <div className="experience-body" style={{marginTop: '4rem'}}>
                <ScrollAnimation
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="experience-description"
                >
                    <h1 style={{color: theme.primary}}>Pengalaman Pekerjaan</h1>
                    {experienceData.workExperience.map((work, index) => (
                        <ScrollAnimation
                            key={work.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <WorkCard 
                                id={work.id}
                                jobtitle={work.jobtitle}
                                company={work.company}
                                startYear={work.startYear}
                                endYear={work.endYear}
                                type={work.type}
                                certificate={work.certificate}
                                description={work.description}
                            />
                        </ScrollAnimation>
                    ))}
                </ScrollAnimation>
                
                <ScrollAnimation
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="experience-image"
                >
                    <img src={theme.expimg} alt="" />
                </ScrollAnimation>
            </div>
        </ScrollAnimation>
    )
}

export default Experience;