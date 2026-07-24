import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Tiap section punya path sendiri supaya URL-nya rapi tanpa tanda pagar.
export const SECTION_BY_PATH = {
    '/': 'top',
    '/tentang': 'about',
    '/pengalaman': 'experience',
    '/proyek': 'projects',
    '/kontak': 'contacts',
};

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
        const id = SECTION_BY_PATH[pathname];
        if (!id) return undefined;

        const behavior = firstRun.current ? 'auto' : 'smooth';
        firstRun.current = false;

        // Satu frame supaya layout sudah terbentuk sebelum posisinya diukur.
        const raf = requestAnimationFrame(() => {
            if (id === 'top') {
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
