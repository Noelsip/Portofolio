import { useEffect, useRef, useState } from 'react';

/**
 * Fades and lifts its children into place the first time they scroll into
 * view. IntersectionObserver rather than a scroll listener so it costs
 * nothing while idle; `prefers-reduced-motion` is handled in index.css by
 * flattening the .reveal transition.
 */
function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return undefined;

        if (typeof IntersectionObserver === 'undefined') {
            setVisible(true);
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag
            ref={ref}
            className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
            style={{ '--reveal-delay': `${delay}ms` }}
            {...rest}
        >
            {children}
        </Tag>
    );
}

export default Reveal;
