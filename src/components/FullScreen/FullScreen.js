import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { ThemeContext } from '../../contexts/ThemeContext';
import './FullScreen.css';

function FullScreen() {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isSupported, setIsSupported] = useState(true);
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        icon: {
            fontSize: '2.5rem',
            color: theme.tertiary,
            transition: 'all 0.3s ease',
            '&:hover': {
                color: theme.primary,
                transform: 'scale(1.1)',
            },
        },
    }));
    const classes = useStyles();

    // Check if fullscreen is supported
    const checkFullScreenSupport = () => {
        const elem = document.documentElement;
        return !!(
            elem.requestFullscreen ||
            elem.webkitRequestFullscreen ||
            elem.mozRequestFullScreen ||
            elem.msRequestFullscreen
        );
    };

    // check if currently in full screen mode
    const checkFullScreen = () => {
        setIsFullScreen(
            !!(document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement)
        );
    };

    // toggle full screen mode
    const toggleFullScreen = async () => {
        if (!isSupported) {
            // Fallback untuk mobile - simulasi fullscreen dengan CSS
            handleMobileFullscreen();
            return;
        }

        try {
            if (!isFullScreen) {
                const elem = document.documentElement;
                if (elem.requestFullscreen) {
                    await elem.requestFullscreen();
                } else if (elem.webkitRequestFullscreen) { // Safari
                    await elem.webkitRequestFullscreen();
                } else if (elem.mozRequestFullScreen) { // Firefox
                    await elem.mozRequestFullScreen();
                } else if (elem.msRequestFullscreen) { // IE/Edge
                    await elem.msRequestFullscreen();
                }
            } else {
                // exit full screen mode
                if (document.exitFullscreen) {
                    await document.exitFullscreen();
                } else if (document.webkitExitFullscreen) { // Safari
                    await document.webkitExitFullscreen();
                } else if (document.mozCancelFullScreen) { // Firefox
                    await document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) { // IE/Edge
                    await document.msExitFullscreen();
                }
            }
        } catch (error) {
            console.log('Fullscreen not supported or blocked:', error);
            // Fallback untuk mobile
            handleMobileFullscreen();
        }
    };

    // Fallback untuk mobile yang tidak mendukung fullscreen API
    const handleMobileFullscreen = () => {
        const body = document.body;
        const html = document.documentElement;
        
        if (!isFullScreen) {
            // Masuk ke "fullscreen" mode
            body.style.overflow = 'hidden';
            html.style.overflow = 'hidden';
            
            // Hide browser UI on mobile
            if (window.screen && window.screen.orientation) {
                // For mobile devices
                const meta = document.querySelector('meta[name="viewport"]');
                if (meta) {
                    meta.setAttribute('content', 
                        'width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover'
                    );
                }
            }
            
            // Hide scrollbars
            body.classList.add('mobile-fullscreen');
            setIsFullScreen(true);
        } else {
            // Keluar dari "fullscreen" mode
            body.style.overflow = '';
            html.style.overflow = '';
            
            const meta = document.querySelector('meta[name="viewport"]');
            if (meta) {
                meta.setAttribute('content', 
                    'width=device-width, initial-scale=1.0, user-scalable=yes'
                );
            }
            
            body.classList.remove('mobile-fullscreen');
            setIsFullScreen(false);
        }
    };

    useEffect(() => {
        // Check if fullscreen is supported
        setIsSupported(checkFullScreenSupport());

        // listen for full screen change events
        const handleFullScreenChange = () => {
            checkFullScreen();
        };

        document.addEventListener("fullscreenchange", handleFullScreenChange);
        document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
        document.addEventListener("mozfullscreenchange", handleFullScreenChange);
        document.addEventListener("MSFullscreenChange", handleFullScreenChange);

        // initial check
        checkFullScreen();

        // cleanup
        return () => {
            document.removeEventListener("fullscreenchange", handleFullScreenChange);
            document.removeEventListener("webkitfullscreenchange", handleFullScreenChange);
            document.removeEventListener("mozfullscreenchange", handleFullScreenChange);
            document.removeEventListener("MSFullscreenChange", handleFullScreenChange);
            
            // Cleanup mobile fullscreen jika component unmount
            const body = document.body;
            const html = document.documentElement;
            body.style.overflow = '';
            html.style.overflow = '';
            body.classList.remove('mobile-fullscreen');
        };
    }, []);

    return(
        <div className='fullScreenButton'>
            <button
                onClick={toggleFullScreen}
                aria-label={isFullScreen ? "Keluar dari layar penuh" : "Masuk ke layar penuh"}
                title={isFullScreen ? "Keluar dari layar penuh" : "Masuk ke layar penuh"}
            >
                {isFullScreen ? (
                    <MdFullscreenExit className={classes.icon} />
                ) : (
                    <MdFullscreen className={classes.icon} />
                )}
            </button>
        </div>
    );
}

export default FullScreen;