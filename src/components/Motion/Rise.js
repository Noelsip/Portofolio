import { motion, useReducedMotion } from 'motion/react';

/**
 * Reveal naik pelan tanpa memotong apa pun.
 *
 * Dipakai untuk elemen yang isinya sengaja menjorok keluar kotaknya, seperti
 * kartu proyek: blok judulnya punya margin negatif supaya menimpa tepi gambar,
 * dan `clip-path` milik Wipe akan memangkas bagian yang menjorok itu. Jadi di
 * tempat seperti ini pakai Rise, bukan Wipe.
 */
function Rise({
    as = 'div',
    delay = 0,
    duration = 0.7,
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

    return (
        <Tag
            className={className}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -80px 0px' }}
            transition={{ duration, delay, ease: [0.22, 0.61, 0.36, 1] }}
            {...rest}
        >
            {children}
        </Tag>
    );
}

export default Rise;
