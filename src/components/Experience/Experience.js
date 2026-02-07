import { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { experienceData } from '../../data/experienceData';

import './Experience.css';

function ExperienceCard({ exp, theme }) {
    return (
        <div
            className="experience-card"
            style={{ backgroundColor: theme.primary30 }}
        >
            <div className="experience-details">
                <h6 style={{ color: theme.primary }}>
                    {exp.startYear} - {exp.endYear}
                    {exp.type && <span className="exp-type" style={{ color: theme.tertiary50 }}> • {exp.type}</span>}
                </h6>
                <h4 style={{ color: theme.tertiary }}>{exp.title}</h4>
                <h5 style={{ color: theme.tertiary80 }}>{exp.organization}</h5>
                <p style={{ color: theme.tertiary70, fontSize: '0.9rem', marginTop: '0.5rem' }}>
                    {exp.description}
                </p>
                {exp.certificate && (
                    <a
                        href={exp.certificate}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            color: theme.primary,
                            fontSize: '0.85rem',
                            marginTop: '0.5rem',
                            display: 'inline-block'
                        }}
                    >
                        Lihat Sertifikat →
                    </a>
                )}
            </div>
        </div>
    );
}

function Experience() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="experience" id="experience" style={{ backgroundColor: theme.secondary }}>
            <div className="experience-body">
                <div className="experience-description">
                    <h1 style={{ color: theme.primary }}>Pengalaman</h1>
                    {experienceData.map((exp) => (
                        <ExperienceCard
                            key={exp.id}
                            exp={exp}
                            theme={theme}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience;