import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@material-ui/core';
import { FaCertificate, FaChevronDown, FaChevronUp } from 'react-icons/fa';

import { ThemeContext } from '../../contexts/ThemeContext';

import orgImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import orgImgBlack from '../../assets/svg/experience/expImgBlack.svg'

import './Experience.css'

function OrganizationCard({id, organization, position, startYear, endYear, type, certificate, description}) {

    const { theme } = useContext(ThemeContext);
    const [showDescription, setShowDescription] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const useStyles = makeStyles((t) => ({
        organizationCard: {
            backgroundColor: theme.primary30,
            borderRadius: '20px',
            padding: '2rem',
            height: (showDescription || isAnimating) ? 'auto' : '400px', // Pertahankan tinggi saat animating
            minHeight: '400px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            border: `1px solid ${theme.primary50}`,
            marginBottom: '2.5rem',
            "&:hover": {
                backgroundColor: theme.primary50,
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
            },
            transition: 'all 0.3s ease',
        },
        cardContent: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        },
        detailsSection: {
            flex: '0 0 auto',
            marginBottom: '1rem',
        },
        positionTitle: {
            color: theme.tertiary, 
            fontSize: '1.3rem',
            fontWeight: 'bold',
            lineHeight: '1.3',
            height: '3.2rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            marginBottom: '0.5rem',
        },
        organizationName: {
            color: theme.tertiary80, 
            fontSize: '1rem',
            fontWeight: 'normal',
            lineHeight: '1.3',
            height: '3.2rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
        },
        middleSection: {
            flex: (showDescription || isAnimating) ? '0 0 auto' : '1 1 auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
        },
        descriptionSection: {
            marginTop: '1rem',
            marginBottom: '1rem',
            overflow: 'hidden',
        },
        descriptionList: {
            listStyle: 'none',
            padding: 0,
            margin: 0,
        },
        descriptionItem: {
            color: theme.tertiary80,
            fontSize: '0.9rem',
            lineHeight: '1.4',
            marginBottom: '0.5rem',
            paddingLeft: '1rem',
            position: 'relative',
            '&::before': {
                content: '"•"',
                color: theme.primary,
                fontWeight: 'bold',
                position: 'absolute',
                left: 0,
            }
        },
        expandButton: {
            backgroundColor: 'transparent',
            color: theme.primary,
            border: `1px solid ${theme.primary}`,
            borderRadius: '15px',
            textTransform: 'none',
            padding: '6px 12px',
            fontSize: '0.8rem',
            fontWeight: '500',
            marginTop: '0.5rem',
            transition: 'all 0.3s ease',
            '&:hover': {
                backgroundColor: theme.primary,
                color: theme.secondary,
            },
        },
        bottomSection: {
            flex: '0 0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            marginTop: (showDescription || isAnimating) ? '1rem' : 'auto',
        },
        buttonContainer: {
            height: '60px',
            display: 'flex',
            alignItems: 'flex-start',
            marginTop: '1rem',
        },
        certificateBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '15px',
            textTransform: 'none',
            padding: '8px 16px',
            fontSize: '0.9rem',
            fontWeight: '500',
            border: `2px solid ${theme.primary}`,
            transition: 'all 0.3s ease',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.primary,
                border: `2px solid ${theme.primary}`,
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            },
        },
        imageContainer: {
            height: '80px',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            padding: '0.5rem',
            backgroundColor: theme.primary,
            borderRadius: '15px',
            marginTop: '1rem',
        },
    }));

    const classes = useStyles();

    const handleCertificateClick = () => {
        if (certificate) {
            window.open(certificate, '_blank', 'noopener,noreferrer');
        }
    };

    const toggleDescription = () => {
        if (showDescription) {
            // Saat menutup, set animating state
            setIsAnimating(true);
            setShowDescription(false);
            
            // Reset animating state setelah animasi selesai
            setTimeout(() => {
                setIsAnimating(false);
            }, 400); // Durasi lebih lama dari animasi (300ms + buffer)
        } else {
            // Saat membuka, langsung set
            setShowDescription(true);
        }
    };

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
                <div className={classes.cardContent}>
                    {/* Section atas - Title dan Organization */}
                    <div className={classes.detailsSection}>
                        <h2 className={classes.positionTitle}>
                            {position}
                        </h2>
                        <h3 className={classes.organizationName}>
                            {organization}
                        </h3>
                    </div>
                    
                    {/* Section tengah - Tanggal, Type, dan Description */}
                    <div className={classes.middleSection}>
                        <div style={{
                            color: theme.primary, 
                            fontWeight: 'bold', 
                            fontSize: '1rem',
                            marginBottom: '0.5rem',
                        }}>
                            {startYear} - {endYear}
                        </div>
                        <div style={{
                            color: theme.tertiary70,
                            fontSize: '0.9rem',
                            fontStyle: 'italic'
                        }}>
                            {type}
                        </div>
                        
                        {/* Tombol untuk expand/collapse description */}
                        {description && description.length > 0 && (
                            <Button
                                className={classes.expandButton}
                                onClick={toggleDescription}
                                startIcon={showDescription ? <FaChevronUp /> : <FaChevronDown />}
                                disabled={isAnimating} // Disable button saat animating
                            >
                                {showDescription ? 'Sembunyikan Detail' : 'Lihat Detail'}
                            </Button>
                        )}
                        
                        {/* Description Section dengan AnimatePresence */}
                        <AnimatePresence mode="wait">
                            {showDescription && description && (
                                <motion.div
                                    key="description"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ 
                                        opacity: 1, 
                                        height: 'auto',
                                        transition: {
                                            height: { duration: 0.3, ease: "easeOut" },
                                            opacity: { duration: 0.3, delay: 0.1 }
                                        }
                                    }}
                                    exit={{ 
                                        opacity: 0, 
                                        height: 0,
                                        transition: {
                                            opacity: { duration: 0.15 },
                                            height: { duration: 0.3, delay: 0.15, ease: "easeIn" }
                                        }
                                    }}
                                    className={classes.descriptionSection}
                                >
                                    <ul className={classes.descriptionList}>
                                        {description.map((item, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ 
                                                    opacity: 1, 
                                                    x: 0,
                                                    transition: { duration: 0.3, delay: index * 0.05 }
                                                }}
                                                exit={{ 
                                                    opacity: 0, 
                                                    x: -20,
                                                    transition: { duration: 0.15 }
                                                }}
                                                className={classes.descriptionItem}
                                            >
                                                {item}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    
                    {/* Section bawah - Button dan Image */}
                    <div className={classes.bottomSection}>
                        {/* Container untuk button dengan tinggi tetap */}
                        <div className={classes.buttonContainer}>
                            {certificate && (
                                <Button
                                    className={classes.certificateBtn}
                                    onClick={handleCertificateClick}
                                    startIcon={<FaCertificate />}
                                >
                                    Lihat Sertifikat
                                </Button>
                            )}
                        </div>
                        
                        {/* Image container */}
                        <div className={classes.imageContainer}>
                            <img 
                                src={theme.type === 'light' ? orgImgBlack : orgImgWhite} 
                                alt="Organization" 
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    objectFit: 'contain'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>   
    )
}

export default OrganizationCard