import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';

import { ThemeContext } from '../../../contexts/ThemeContext';
import './SingleService.css';

function SingleService({ id, title, icon }) {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        iconBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 50,
            border: `2px solid ${theme.tertiary}`,
            color: theme.tertiary,
            transition: 'all 0.2s',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.primary,
                transform: 'scale(1.1)',
                border: `2px solid ${theme.secondary}`,
            },
        },
        icon: {
            fontSize: '1.1rem',
            transition: 'all 0.2s',
        },
        serviceCard: {
            backgroundColor: theme.primary30,
            '&:hover': {
                backgroundColor: theme.primary50,
            },
        }
    }));

    const classes = useStyles();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.6,
                delay: id * 0.1 
            }}
            whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
            }}
        >
            <div className={`single-service ${classes.serviceCard}`}>
                <div className="service-icon" style={{color: theme.primary}}>
                    {icon}
                </div>
                <h3 style={{color: theme.tertiary}}>{title}</h3>
            </div>
        </motion.div>
    )
}

export default SingleService;