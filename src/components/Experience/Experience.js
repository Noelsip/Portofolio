import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Experience.css';

import { experienceData } from '../../data/experienceData'
import OrganizationCard from './OrganizationCard';
import WorkCard from './WorkCard';

function Experience() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="experience" id="experience" style={{backgroundColor: theme.secondary}}> 
            {/* Section Pengalaman Organisasi & Kepanitian */}
            <div className="experience-body">
                <div className="experience-image">
                    <img src={theme.expimg} alt="" />
                </div>
                <div className="experience-description">
                    <h1 style={{color: theme.primary}}>Pengalaman Organisasi & Kepanitian</h1>
                    {experienceData.organizationExperience.map(org => (
                        <OrganizationCard 
                            key={org.id}
                            id={org.id}
                            position={org.position}
                            organization={org.organization}
                            startYear={org.startYear}
                            endYear={org.endYear}
                        />
                    ))}
                </div>
            </div>

            {/* Section Pengalaman Pekerjaan */}
            <div className="experience-body" style={{marginTop: '4rem'}}>
                <div className="experience-description">
                    <h1 style={{color: theme.primary}}>Pengalaman Pekerjaan</h1>
                    {experienceData.workExperience.map(work => (
                        <WorkCard 
                            key={work.id}
                            id={work.id}
                            jobtitle={work.jobtitle}
                            company={work.company}
                            startYear={work.startYear}
                            endYear={work.endYear}
                        />
                    ))}
                </div>
                <div className="experience-image">
                    <img src={theme.expimg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Experience