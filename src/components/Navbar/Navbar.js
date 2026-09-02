import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { headerData } from '../../data/headerData';
import { useLang } from '../../i18n/LanguageContext';
import LanguageToggle from './LanguageToggle';
import './Navbar.css';

// Urutannya mengikuti urutan section di beranda, jadi navbar bisa dibaca
// sebagai ringkasan isi situs. Path ditulis dalam bahasa Inggris karena itu
// bahasa default; alamat Indonesia yang lama tetap diterima oleh RouteScroll.
const navItems = [
    { key: 'nav.about', to: '/about' },
    { key: 'nav.skills', to: '/skills' },
    { key: 'nav.work', to: '/projects' },
    { key: 'nav.experience', to: '/experience' },
    { key: 'nav.contact', to: '/contact' },
];

function Navbar() {
    const { t } = useLang();
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
                <nav className='nav__links' aria-label={t('nav.main')}>
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className='nav__link link-wipe'
                        >
                            {t(item.key)}
                        </Link>
                    ))}
                    <LanguageToggle />
                    <a
                        className='nav__cv'
                        href={headerData.resumePdf}
                        target='_blank'
                        rel='noreferrer'
                    >
                        {t('nav.cv')}
                    </a>
                </nav>

                <button
                    type='button'
                    className={`nav__burger ${menuOpen ? 'is-open' : ''}`}
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
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
                <nav className='nav__panelLinks' aria-label={t('nav.mobile')}>
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
                            {t(item.key)}
                        </Link>
                    ))}
                </nav>

                <div className='nav__panelFoot'>
                    <a
                        className='nav__panelCv'
                        href={headerData.resumePdf}
                        target='_blank'
                        rel='noreferrer'
                        tabIndex={menuOpen ? 0 : -1}
                        onClick={() => setMenuOpen(false)}
                    >
                        {t('nav.downloadCv')}
                    </a>
                    <LanguageToggle tabIndex={menuOpen ? 0 : -1} />
                </div>
            </div>
        </header>
    );
}

export default Navbar;
