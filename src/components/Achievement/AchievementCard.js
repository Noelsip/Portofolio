import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';

import { ThemeContext } from '../../contexts/ThemeContext';

import { AiOutlineFolder } from "react-icons/ai";

import './Achievement.css'

function AchievementCard({id, title, details, date, field, image}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        achievementCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.6,
                ease: "easeOut",
                delay: id * 0.1 // Stagger animation berdasarkan id
            }}
            whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
            }}
        >
           <div key={id} className={`achievement-card ${classes.achievementCard}`}>
               <div className="achievecard-content">
                    <div className="achievecard-details1">
                        <h2 style={{color: theme.tertiary}}>{title}</h2>
                        <p style={{color: theme.tertiary80}}>{details}</p>
                    </div>
                    <div className="achievecard-details2" style={{color: theme.primary}}>
                        <h5>{date}</h5>
                        <div className="achievecard-field">
                            <AiOutlineFolder />
                            <h5>{field}</h5>
                        </div>   
                    </div>
                </div> 
                <div className="achievecard-imgcontainer">
                    <img src={image} alt="" />
                </div>
           </div>
        </motion.div>
        
    )
}

export default AchievementCard