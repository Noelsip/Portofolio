import { motion, useReducedMotion } from 'motion/react';

/**
 * Clip-path wipe reveal. The content is fully laid out from the start and
 * only the clip animates, so nothing reflows and text stays selectable.
 *
 * Aturan `prefers-reduced-motion` di index.css hanya mempengaruhi transisi
 * CSS, sementara gerakan di sini dijalankan lewat JavaScript. Jadi
 * preferensinya harus dibaca sendiri, kalau tidak isinya tetap bergerak dan
 * sempat tidak terlihat bagi orang yang justru minta gerakannya dihentikan.
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
    const calm = useReducedMotion();

    if (calm) {
        return (
            <Tag className={className} {...rest}>
                {children}
            </Tag>
        );
    }

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
