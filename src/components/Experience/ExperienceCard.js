import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg'

import './Experience.css'

function ExperienceCard({id, company, jobtitle, startYear, endYear}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        experienceCard: {
            backgroundColor: theme.primary30,
            borderRadius: '20px',
            padding: '2rem',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            border: `1px solid ${theme.primary50}`,
            "&:hover": {
                backgroundColor: theme.primary50,
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
            },
            transition: 'all 0.3s ease',
        },
    }));

    const classes = useStyles();

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.6,
                delay: id * 0.1 
            }}
            whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
            }}
        >
            <div key={id} className={`experience-card ${classes.experienceCard}`}>
                <div className="experience-content">
                    <div className="experience-details">
                        <h2 style={{color: theme.tertiary, marginBottom: '0.5rem', fontSize: '1.5rem'}}>{jobtitle}</h2>
                        <h3 style={{color: theme.tertiary80, marginBottom: '1rem', fontSize: '1.2rem'}}>{company}</h3>
                        <div className="experience-period" style={{color: theme.primary, fontWeight: 'bold', fontSize: '1rem'}}>
                            {startYear} - {endYear}
                        </div>
                    </div>
                </div>
                <div className="experience-imgcontainer" style={{
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    marginTop: '1.5rem',
                    padding: '1rem',
                    backgroundColor: theme.primary,
                    borderRadius: '15px'
                }}>
                    <img 
                        src={theme.type === 'light' ? expImgBlack : expImgWhite} 
                        alt="Experience" 
                        style={{
                            width: '80px',
                            height: '80px',
                            objectFit: 'contain'
                        }}
                    />
                </div>
            </div>
        </motion.div>   
    )
}

export default ExperienceCard