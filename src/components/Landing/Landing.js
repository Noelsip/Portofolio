import React, { useContext, useRef } from 'react';
import { Button } from '@material-ui/core';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';
import AnimatedImage from './AnimatedImage';
import RotatingText from './RotatingText';
import VariableProximity from './VariableProximity';
import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaYoutube,
    FaBlogger,
} from 'react-icons/fa';

function Landing() {
    const { theme } = useContext(ThemeContext);
    const landingRef = useRef(null); // Ref untuk container

    // Array teks yang akan dirotasi
    const rotatingTexts = [
        "Tech Enthusiast",
        "Web Developer", 
        "Problem Solver",
        "Team Leader",
        "Creative Thinker"
    ];

    const useStyles = makeStyles((t) => ({
        resumeBtn: {
            color: theme.primary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            fontSize: '1rem',
            fontWeight: '500',
            height: '50px',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.tertiary,
                color: theme.secondary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                width: '180px',
            },
        },
        contactBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.tertiary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
    }));

    const classes = useStyles();

    return (
    <div className='landing' ref={landingRef}>
        <div className='landing--container'>
            <div
                className='landing--container-left'
                style={{ backgroundColor: theme.primary }}
            >
                <div className='lcl--content'>
                    {socialsData.linkedIn && (
                        <a
                            href={socialsData.linkedIn}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaLinkedin
                                className='landing--social'
                                style={{ color: theme.secondary }}
                                aria-label='LinkedIn'
                            />
                        </a>
                    )}
                    {socialsData.github && (
                        <a
                            href={socialsData.github}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaGithub
                                className='landing--social'
                                style={{ color: theme.secondary }}
                                aria-label='GitHub'
                            />
                        </a>
                    )}
                    {socialsData.twitter && (
                        <a
                            href={socialsData.twitter}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaTwitter
                                className='landing--social'
                                style={{ color: theme.secondary }}
                                aria-label='Twitter'
                            />
                        </a>
                    )}
                    {socialsData.youtube && (
                        <a
                            href={socialsData.youtube}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaYoutube
                                className='landing--social'
                                style={{ color: theme.secondary }}
                                aria-label='YouTube'
                            />
                        </a>
                    )}
                    {socialsData.blogger && (
                        <a
                            href={socialsData.blogger}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FaBlogger
                                className='landing--social'
                                style={{ color: theme.secondary }}
                                aria-label='Blogger'
                            />
                        </a>
                    )}
                </div>
            </div>
            
            <div className='landing--img'>
                    <AnimatedImage 
                        src={headerData.image} 
                        alt={headerData.name}
                    />
                </div>
                
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        <h6>
                            Informatics Student | 
                            <RotatingText 
                                texts={rotatingTexts}
                                rotationInterval={3000}
                                transition={{ 
                                    type: "tween", 
                                    duration: 0.3,
                                    ease: "easeInOut"
                                }}
                                initial={{ y: "50%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: "-50%", opacity: 0 }}
                                splitBy="words"
                                staggerDuration={0}
                                mainClassName="landing-rotating-text"
                                style={{ 
                                    color: theme.primary,
                                    marginLeft: '5px',
                                    display: 'inline-block'
                                }}
                            />
                        </h6>
                    <h1>
                        <VariableProximity
                            label={headerData.name}
                            containerRef={landingRef}
                            radius={80}
                            falloff="exponential"
                            style={{ 
                                color: theme.tertiary,
                                fontSize: 'inherit',
                                fontFamily: 'inherit'
                            }}
                        />
                    </h1>
                    <p>{headerData.desciption}</p>

                    <div className='lcr-buttonContainer'>
                        {headerData.resumePdf && (
                            <a
                                href={headerData.resumePdf}
                                download='resune_noel'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <Button className={classes.resumeBtn}>
                                    Download CV
                                </Button>
                            </a>
                        )}
                        <NavLink
                            to='/#contacts'
                            smooth={true}
                            spy='true'
                            duration={2000}
                        >
                            <Button className={classes.contactBtn}>
                                Contact
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

}

export default Landing;