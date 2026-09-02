import { LANGUAGES, useLang } from '../../i18n/LanguageContext';

const LABELS = { en: 'EN', id: 'ID' };

/**
 * Dua tombol berdampingan, bukan dropdown. Pilihannya cuma dua, jadi keduanya
 * lebih baik terlihat sekaligus daripada disembunyikan di balik satu klik.
 */
function LanguageToggle({ tabIndex }) {
    const { lang, setLang, t } = useLang();

    return (
        <div className='langToggle' role='group' aria-label={t('nav.language')}>
            {LANGUAGES.map((code) => (
                <button
                    key={code}
                    type='button'
                    className={`langToggle__btn ${
                        lang === code ? 'is-active' : ''
                    }`}
                    onClick={() => setLang(code)}
                    aria-pressed={lang === code}
                    tabIndex={tabIndex}
                >
                    {LABELS[code]}
                </button>
            ))}
        </div>
    );
}

export default LanguageToggle;
