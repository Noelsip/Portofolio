import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Tiap section punya path sendiri supaya URL-nya rapi tanpa tanda pagar.
// Alamat Inggris dan Indonesia sama-sama diterima dan menuju section yang
// sama, jadi tautan yang pernah dibagikan tetap hidup setelah situs ini
// punya dua bahasa.
export const SECTION_BY_PATH = {
    '/': 'top',
    '/tentang': 'about',
    '/about': 'about',
    '/keahlian': 'skills',
    '/skills': 'skills',
    '/pengalaman': 'experience',
    '/experience': 'experience',
    '/saat-ini': 'currently',
    '/now': 'currently',
    '/kontak': 'contacts',
    '/contact': 'contacts',
};

// Proyek bukan lagi section di beranda, melainkan halaman sendiri.
export const PROJECT_PATHS = ['/proyek', '/projects'];

const OFFSET = 84;

/**
 * Menggeser halaman ke section yang cocok dengan path saat ini. Kunjungan
 * pertama langsung lompat tanpa animasi, karena menganimasikan scroll dari
 * posisi nol saat halaman baru terbuka justru terlihat seperti gangguan.
 */
function RouteScroll() {
    const { pathname } = useLocation();
    const firstRun = useRef(true);

    useEffect(() => {
        const behavior = firstRun.current ? 'auto' : 'smooth';
        firstRun.current = false;

        const id = SECTION_BY_PATH[pathname];

        // Satu frame supaya layout sudah terbentuk sebelum posisinya diukur.
        const raf = requestAnimationFrame(() => {
            // Halaman proyek adalah halaman tersendiri: selalu mulai dari atas.
            if (!id || id === 'top') {
                window.scrollTo({ top: 0, behavior });
                return;
            }

            const el = document.getElementById(id);
            if (!el) return;

            const y = el.getBoundingClientRect().top + window.pageYOffset - OFFSET;
            window.scrollTo({ top: y, behavior });
        });

        return () => cancelAnimationFrame(raf);
    }, [pathname]);

    return null;
}

export default RouteScroll;
