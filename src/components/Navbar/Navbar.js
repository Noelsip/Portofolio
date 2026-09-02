import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { headerData } from '../../data/headerData';
import './Navbar.css';

// Urutannya mengikuti urutan section di halaman, jadi navbar bisa dibaca
// sebagai ringkasan isi situs.
const navItems = [
    { label: 'Tentang', to: '/tentang' },
    { label: 'Keahlian', to: '/keahlian' },
    { label: 'Proyek', to: '/proyek' },
    { label: 'Pengalaman', to: '/pengalaman' },
    { label: 'Kontak', to: '/kontak' },
];

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Kunci halaman di belakang panel mobile, dan tutup dengan Escape.
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
                <nav className='nav__links' aria-label='Navigasi utama'>
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className='nav__link link-wipe'
                        >
                            {item.label}
                        </Link>
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
                        <Link
                            key={item.to}
                            to={item.to}
                            className='nav__panelLink'
                            style={{
                                transitionDelay: `${menuOpen ? 80 + i * 45 : 0}ms`,
                            }}
                            onClick={() => setMenuOpen(false)}
                            tabIndex={menuOpen ? 0 : -1}
                        >
                            {item.label}
                        </Link>
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
