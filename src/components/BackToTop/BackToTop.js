import React, { useState, useContext, useEffect } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import { makeStyles } from '@material-ui/core/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import './BackToTop.css';

function BackToTop() {
    const [visible, setVisible] = useState(false);
    const { theme } = useContext(ThemeContext);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Perbaikan: Gunakan useEffect untuk mengelola event listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        
        // Cleanup function untuk menghapus event listener saat unmount
        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    }, []); // Empty dependency array karena toggleVisible tidak berubah

    const useStyles = makeStyles(() => ({
        icon: {
            fontSize: '3rem',
            color: theme.tertiary,
        },
    }));

    const classes = useStyles();

    return (
        <div
            style={{ display: visible ? 'inline' : 'none' }}
            className='backToTop'
        >
            <button onClick={scrollToTop} aria-label='Back to top'>
                <IoIosArrowDropupCircle className={classes.icon} />
            </button>
        </div>
    );
}

export default BackToTop;