import { motion } from 'motion/react';

/**
 * Clip-path wipe reveal. The content is fully laid out from the start and
 * only the clip animates, so nothing reflows and text stays selectable.
 */
function Wipe({
    as = 'div',
    from = 'bottom',
    delay = 0,
    duration = 0.85,
    className = '',
    children,
    ...rest
}) {
    const Tag = motion[as] || motion.div;

    const closed = {
        bottom: 'inset(0% 0% 100% 0%)',
        left: 'inset(0% 100% 0% 0%)',
        right: 'inset(0% 0% 0% 100%)',
    }[from];

    return (
        <Tag
            className={className}
            initial={{ clipPath: closed, opacity: 0 }}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
            viewport={{ once: true, margin: '0px 0px -70px 0px' }}
            transition={{
                duration,
                delay,
                ease: [0.22, 0.61, 0.36, 1],
            }}
            {...rest}
        >
            {children}
        </Tag>
    );
}

export default Wipe;
