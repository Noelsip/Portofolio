import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';

import { ThemeContext } from '../../contexts/ThemeContext';

import orgImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import orgImgBlack from '../../assets/svg/experience/expImgBlack.svg'

import './Experience.css'

function OrganizationCard({id, organization, position, startYear, endYear, type}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        organizationCard: {
            backgroundColor: theme.primary30,
            borderRadius: '20px',
            padding: '4rem',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            border: `1px solid ${theme.primary50}`,
            marginBottom: '1.5rem',
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
            <div key={id} className={`organization-card ${classes.organizationCard}`}>
                <div className="organization-content">
                    <div className="organization-details">
                        <h2 style={{
                            color: theme.tertiary, 
                            marginBottom: '0.5rem', 
                            fontSize: '1.5rem',
                            fontWeight: 'bold'
                        }}>
                            {position}
                        </h2>
                        <h3 style={{
                            color: theme.tertiary80, 
                            marginBottom: '1rem', 
                            fontSize: '1.2rem',
                            fontWeight: 'normal'
                        }}>
                            {organization}
                        </h3>
                        <div className="organization-period" style={{
                            color: theme.primary, 
                            fontWeight: 'bold', 
                            fontSize: '1rem',
                            marginBottom: '0.5rem'
                        }}>
                            {startYear} - {endYear}
                        </div>
                        <div className="organization-type" style={{
                            color: theme.tertiary70,
                            fontSize: '0.9rem',
                            fontStyle: 'italic'
                        }}>
                            {type}
                        </div>
                    </div>
                </div>
                <div className="organization-imgcontainer" style={{
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    marginTop: '1.5rem',
                    padding: '1rem',
                    backgroundColor: theme.primary,
                    borderRadius: '15px'
                }}>
                    <img 
                        src={theme.type === 'light' ? orgImgBlack : orgImgWhite} 
                        alt="Organization" 
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

export default OrganizationCard