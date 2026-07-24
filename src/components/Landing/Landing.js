import { useEffect, useState } from 'react';
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

// Counted from the project list so the headline numbers can never drift out
// of sync with what the page actually shows. Coursework carries the same
// "Dibangun sendiri" label, so the product counts also filter on the studio.
const count = (predicate) => projectsData.filter(predicate).length;

const pad = (n) => String(n).padStart(2, '0');

const scrollWithOffset = (el) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset - 84;
    window.scrollTo({ top: y, behavior: 'smooth' });
};

function Landing() {
    const [roleIndex, setRoleIndex] = useState(0);
    const roles = headerData.roles;

    useEffect(() => {
        if (roles.length < 2) return undefined;
        const id = setInterval(
            () => setRoleIndex((i) => (i + 1) % roles.length),
            2800
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
                <p className='eyebrow landing__eyebrow'>
                    {headerData.location}
                </p>

                <h1 className='landing__name'>
                    {headerData.name}
                </h1>

                <div className='landing__roles' aria-label={headerData.role}>
                    <span className='landing__rolesRule' aria-hidden='true' />
                    <span className='landing__rolesTrack'>
                        {roles.map((role, i) => (
                            <span
                                key={role}
                                className={`landing__role ${
                                    i === roleIndex ? 'is-active' : ''
                                }`}
                                aria-hidden={i !== roleIndex}
                            >
                                {role}
                            </span>
                        ))}
                    </span>
                </div>

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

                <dl className='landing__stats'>
                    {stats.map((stat) => (
                        <div className='landing__stat' key={stat.label}>
                            <dt className='landing__statValue'>{stat.value}</dt>
                            <dd className='landing__statLabel'>{stat.label}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}

export default Landing;
