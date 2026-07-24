import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

import './BackToTop.css';

function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisible = () => setVisible(window.scrollY > 500);
        toggleVisible();
        window.addEventListener('scroll', toggleVisible, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    return (
        <button
            type='button'
            className={`backToTop ${visible ? 'is-visible' : ''}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label='Kembali ke atas'
            tabIndex={visible ? 0 : -1}
        >
            <FiArrowUp aria-hidden='true' />
        </button>
    );
}

export default BackToTop;
