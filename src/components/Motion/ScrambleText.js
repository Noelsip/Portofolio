import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&/*<>[]{}$@';

/**
 * Resolves text out of random glyphs, left to right, the first time it
 * scrolls into view. Spaces are never scrambled so word shapes stay legible
 * while it settles.
 */
function ScrambleText({ text, as: Tag = 'span', speed = 28, className = '' }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });
    const [output, setOutput] = useState(text);
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (!inView || done) return undefined;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setOutput(text);
            setDone(true);
            return undefined;
        }

        let frame = 0;
        let raf = null;
        let last = 0;

        const tick = (now) => {
            if (now - last >= speed) {
                last = now;
                // Two frames per character keeps the resolve readable rather
                // than a blur that finishes before the eye lands on it.
                const settled = Math.floor(frame / 2);

                setOutput(
                    text
                        .split('')
                        .map((char, i) => {
                            if (char === ' ') return ' ';
                            if (i < settled) return char;
                            return GLYPHS[
                                Math.floor(Math.random() * GLYPHS.length)
                            ];
                        })
                        .join('')
                );

                frame += 1;
                if (settled >= text.length) {
                    setOutput(text);
                    setDone(true);
                    return;
                }
            }
            raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => {
            if (raf) cancelAnimationFrame(raf);
        };
    }, [inView, done, text, speed]);

    return (
        <Tag ref={ref} className={className}>
            {output}
        </Tag>
    );
}

export default ScrambleText;
