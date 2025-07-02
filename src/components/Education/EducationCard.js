import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'
import './Education.css'

function EducationCard({ id, institution, course, startYear, endYear }) {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
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
                scale: 1.02,
                transition: { duration: 0.3 }
            }}
        >
            <div key={id} className={`education-card ${classes.educationCard}`}>
                <div className="educard-img" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
                </div>
                <div className="education-details">
                    <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: theme.tertiary}}>{course}</h4>
                    <h5 style={{color: theme.tertiary80}}>{institution}</h5>
                </div>
            </div>
        </motion.div>
    )
}

export default EducationCard