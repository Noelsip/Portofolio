import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';
import './Landing.css';

const socials = [
    { key: 'linkedIn', href: socialsData.linkedIn, Icon: FaLinkedinIn, label: 'LinkedIn' },
    { key: 'github', href: socialsData.github, Icon: FaGithub, label: 'GitHub' },
    { key: 'instagram', href: socialsData.instagram, Icon: FaInstagram, label: 'Instagram' },
    { key: 'youtube', href: socialsData.youtube, Icon: FaYoutube, label: 'YouTube' },
];

const scrollWithOffset = (el) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset - 84;
    window.scrollTo({ top: y, behavior: 'smooth' });
};

const EASE = [0.22, 0.61, 0.36, 1];

function Landing() {
    const [roleIndex, setRoleIndex] = useState(0);
    const roles = headerData.roles;

    useEffect(() => {
        if (roles.length < 2) return undefined;
        const id = setInterval(
            () => setRoleIndex((i) => (i + 1) % roles.length),
            2600
        );
        return () => clearInterval(id);
    }, [roles.length]);

    return (
        <section className='landing' id='top'>
            <div className='shell landing__inner'>
                {/* The name spans the full measure so it lands in two lines
                    instead of stacking into a narrow column. */}
                <h1 className='landing__name'>
                    {headerData.nameLines.map((line, i) => (
                        <span className='landing__lineMask' key={line}>
                            <motion.span
                                className='landing__line'
                                initial={{ y: '110%' }}
                                animate={{ y: '0%' }}
                                transition={{
                                    duration: 0.95,
                                    delay: 0.12 + i * 0.1,
                                    ease: EASE,
                                }}
                            >
                                {line}
                            </motion.span>
                        </span>
                    ))}
                </h1>

                {/* Kalimat ini yang menjelaskan siapa Noel sebelum daftar
                    peran menjelaskan apa jabatannya. */}
                <motion.p
                    className='landing__tagline'
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.38, ease: EASE }}
                >
                    {headerData.tagline}
                </motion.p>

                <div className='landing__meta'>
                    <motion.div
                        className='landing__metaLeft'
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
                    >
                        <p className='landing__desc'>{headerData.description}</p>

                        <div className='landing__actions'>
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
                        </div>
                    </motion.div>

                    <motion.div
                        className='landing__metaRight'
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.62, ease: EASE }}
                    >
                        {/* All three roles stay listed; the cycle only moves
                            the highlight, so the column never sits empty. */}
                        <ul className='landing__roles'>
                            {roles.map((role, i) => (
                                <li
                                    key={role}
                                    className={`landing__role ${
                                        i === roleIndex ? 'is-active' : ''
                                    }`}
                                >
                                    <span
                                        className='landing__roleBar'
                                        aria-hidden='true'
                                    />
                                    {role}
                                </li>
                            ))}
                        </ul>

                        <p className='landing__location'>
                            {headerData.location}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Landing;
