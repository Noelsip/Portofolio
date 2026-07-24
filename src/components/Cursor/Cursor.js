import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

import './Cursor.css';

/**
 * Custom cursor: a small dot that trails the pointer and swells into a ring
 * over anything interactive. Only mounts for fine pointers, so touch devices
 * and anyone on `prefers-reduced-motion` keep the native cursor.
 */
function Cursor() {
    const [enabled, setEnabled] = useState(false);
    const [hovering, setHovering] = useState(false);
    const [pressed, setPressed] = useState(false);

    const x = useMotionValue(-100);
    const y = useMotionValue(-100);

    // Slightly under-damped so the dot lags the pointer and settles.
    const sx = useSpring(x, { stiffness: 900, damping: 45, mass: 0.35 });
    const sy = useSpring(y, { stiffness: 900, damping: 45, mass: 0.35 });

    useEffect(() => {
        const fine = window.matchMedia('(pointer: fine)');
        const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
        const allowed = fine.matches && !calm.matches;

        setEnabled(allowed);
        if (!allowed) return undefined;

        document.body.classList.add('has-custom-cursor');

        const move = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
        };

        const over = (e) => {
            const target = e.target.closest(
                'a, button, input, textarea, [data-cursor]'
            );
            setHovering(Boolean(target));
        };

        const down = () => setPressed(true);
        const up = () => setPressed(false);

        window.addEventListener('mousemove', move, { passive: true });
        window.addEventListener('mouseover', over, { passive: true });
        window.addEventListener('mousedown', down);
        window.addEventListener('mouseup', up);

        return () => {
            document.body.classList.remove('has-custom-cursor');
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseover', over);
            window.removeEventListener('mousedown', down);
            window.removeEventListener('mouseup', up);
        };
    }, [x, y]);

    if (!enabled) return null;

    return (
        <motion.div
            className='cursor'
            style={{ x: sx, y: sy }}
            aria-hidden='true'
        >
            <motion.span
                className='cursor__ring'
                animate={{
                    scale: pressed ? 0.75 : hovering ? 1 : 0.28,
                    opacity: hovering ? 1 : 0.85,
                    borderWidth: hovering ? 1.5 : 6,
                }}
                transition={{ type: 'spring', stiffness: 420, damping: 32 }}
            />
        </motion.div>
    );
}

export default Cursor;
