import { useEffect, useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import { headerData } from '../../data/headerData';
import './Navbar.css';

const navItems = [
    { label: 'Tentang', to: '/#about' },
    { label: 'Pengalaman', to: '/#experience' },
    { label: 'Proyek', to: '/#projects' },
    { label: 'Kontak', to: '/#contacts' },
];

// The bar is sticky, so an anchor jump has to stop short of the heading.
const scrollWithOffset = (el) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset - 84;
    window.scrollTo({ top: y, behavior: 'smooth' });
};

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock the page behind the mobile panel, and let Escape close it.
    useEffect(() => {
        if (!menuOpen) return undefined;

        const onKey = (e) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', onKey);
        };
    }, [menuOpen]);

    return (
        <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
            <div className='nav__inner shell'>
                <NavLink
                    to='/#top'
                    scroll={scrollWithOffset}
                    className='nav__brand'
                    onClick={() => setMenuOpen(false)}
                >
                    <span className='nav__brandName'>{headerData.shortName}</span>
                    <span className='nav__brandRole'>Product · QA</span>
                </NavLink>

                <nav className='nav__links' aria-label='Navigasi utama'>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            scroll={scrollWithOffset}
                            className='nav__link link-wipe'
                        >
                            {item.label}
                        </NavLink>
                    ))}
                    <a
                        className='nav__cv'
                        href={headerData.resumePdf}
                        target='_blank'
                        rel='noreferrer'
                    >
                        CV
                    </a>
                </nav>

                <button
                    type='button'
                    className={`nav__burger ${menuOpen ? 'is-open' : ''}`}
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
                    aria-expanded={menuOpen}
                    aria-controls='nav-panel'
                >
                    <span />
                    <span />
                </button>
            </div>

            <div
                className={`nav__scrim ${menuOpen ? 'is-open' : ''}`}
                onClick={() => setMenuOpen(false)}
                aria-hidden='true'
            />

            <div
                id='nav-panel'
                className={`nav__panel ${menuOpen ? 'is-open' : ''}`}
                aria-hidden={!menuOpen}
            >
                <nav className='nav__panelLinks' aria-label='Navigasi mobile'>
                    {navItems.map((item, i) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            scroll={scrollWithOffset}
                            className='nav__panelLink'
                            style={{
                                transitionDelay: `${menuOpen ? 80 + i * 45 : 0}ms`,
                            }}
                            onClick={() => setMenuOpen(false)}
                            tabIndex={menuOpen ? 0 : -1}
                        >
                            <span className='nav__panelIndex'>0{i + 1}</span>
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <a
                    className='nav__panelCv'
                    href={headerData.resumePdf}
                    target='_blank'
                    rel='noreferrer'
                    tabIndex={menuOpen ? 0 : -1}
                    onClick={() => setMenuOpen(false)}
                >
                    Unduh CV
                </a>
            </div>
        </header>
    );
}

export default Navbar;
