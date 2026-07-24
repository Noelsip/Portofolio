import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';
import { projectsData } from '../../data/projectsData';
import './Landing.css';

const socials = [
    { key: 'linkedIn', href: socialsData.linkedIn, Icon: FaLinkedinIn, label: 'LinkedIn' },
    { key: 'github', href: socialsData.github, Icon: FaGithub, label: 'GitHub' },
    { key: 'instagram', href: socialsData.instagram, Icon: FaInstagram, label: 'Instagram' },
    { key: 'youtube', href: socialsData.youtube, Icon: FaYoutube, label: 'YouTube' },
];

const count = (predicate) => projectsData.filter(predicate).length;
const pad = (n) => String(n).padStart(2, '0');

const scrollWithOffset = (el) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset - 84;
    window.scrollTo({ top: y, behavior: 'smooth' });
};

const EASE = [0.22, 0.61, 0.36, 1];

function Landing() {
    const [roleIndex, setRoleIndex] = useState(0);
    const roles = headerData.roles;
    const words = headerData.name.split(' ');

    useEffect(() => {
        if (roles.length < 2) return undefined;
        const id = setInterval(
            () => setRoleIndex((i) => (i + 1) % roles.length),
            2600
        );
        return () => clearInterval(id);
    }, [roles.length]);

    const stats = [
        {
            value: pad(
                count(
                    (p) =>
                        p.role === 'Dibangun sendiri' &&
                        p.context === 'Twenti Studio'
                )
            ),
            label: 'Produk dibangun',
        },
        {
            value: pad(count((p) => p.role === 'Dikelola')),
            label: 'Produk dikelola',
        },
        {
            value: pad(count((p) => p.role === 'Diuji')),
            label: 'Sistem klien diuji',
        },
    ];

    return (
        <section className='landing' id='top'>
            <div className='shell landing__inner'>
                <motion.p
                    className='eyebrow landing__eyebrow'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    {headerData.location}
                </motion.p>

                {/* Each word sits in its own overflow-hidden line so it can
                    rise from behind a hard edge instead of just fading. */}
                <h1 className='landing__name'>
                    {words.map((word, i) => (
                        <span className='landing__wordMask' key={word + i}>
                            <motion.span
                                className='landing__word'
                                initial={{ y: '110%' }}
                                animate={{ y: '0%' }}
                                transition={{
                                    duration: 0.9,
                                    delay: 0.2 + i * 0.08,
                                    ease: EASE,
                                }}
                            >
                                {word}
                            </motion.span>
                        </span>
                    ))}
                </h1>

                <motion.div
                    className='landing__roles'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <span className='landing__rolesRule' aria-hidden='true' />
                    <span
                        className='landing__rolesTrack'
                        aria-label={headerData.title}
                    >
                        <AnimatePresence mode='wait'>
                            <motion.span
                                key={roles[roleIndex]}
                                className='landing__role'
                                initial={{ y: '100%', opacity: 0 }}
                                animate={{ y: '0%', opacity: 1 }}
                                exit={{ y: '-100%', opacity: 0 }}
                                transition={{ duration: 0.45, ease: EASE }}
                            >
                                {roles[roleIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </span>
                </motion.div>

                <motion.p
                    className='landing__desc'
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.68, ease: EASE }}
                >
                    {headerData.description}
                </motion.p>

                <motion.div
                    className='landing__actions'
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.78, ease: EASE }}
                >
                    <NavLink
                        to='/#projects'
                        scroll={scrollWithOffset}
                        className='btn btn--solid'
                    >
                        Lihat proyek
                    </NavLink>
                    <a
                        className='btn btn--ghost'
                        href={headerData.resumePdf}
                        target='_blank'
                        rel='noreferrer'
                    >
                        Unduh CV
                    </a>

                    <div className='landing__socials'>
                        {socials
                            .filter((s) => s.href)
                            .map(({ key, href, Icon, label }) => (
                                <a
                                    key={key}
                                    href={href}
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label={label}
                                    className='landing__social'
                                >
                                    <Icon />
                                </a>
                            ))}
                    </div>
                </motion.div>

                <motion.dl
                    className='landing__stats'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                >
                    {stats.map((stat) => (
                        <div className='landing__stat' key={stat.label}>
                            <dt className='landing__statValue'>{stat.value}</dt>
                            <dd className='landing__statLabel'>{stat.label}</dd>
                        </div>
                    ))}
                </motion.dl>
            </div>
        </section>
    );
}

export default Landing;
