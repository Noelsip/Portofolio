import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'

import { uiStrings } from './strings'

const STORAGE_KEY = 'noel-portfolio-lang'

export const LANGUAGES = ['en', 'id']

// Inggris jadi default karena situs ini juga dibaca di luar Indonesia. Bahasa
// browser sengaja tidak dipakai: perekrut Indonesia yang browsernya berbahasa
// Inggris akan langsung dapat versi Inggris tanpa pernah memintanya.
const DEFAULT_LANG = 'en'

const LanguageContext = createContext(null)

function readStored() {
    try {
        const saved = window.localStorage.getItem(STORAGE_KEY)
        if (saved && LANGUAGES.includes(saved)) return saved
    } catch (err) {
        // Mode penyamaran atau penyimpanan situs diblokir. Bukan alasan untuk
        // gagal, cukup kembali ke default.
    }
    return DEFAULT_LANG
}

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(readStored)

    useEffect(() => {
        try {
            window.localStorage.setItem(STORAGE_KEY, lang)
        } catch (err) {
            // Sama seperti di atas: pilihannya tetap berlaku selama sesi ini.
        }
        document.documentElement.lang = lang
    }, [lang])

    // Mengambil satu kalimat siap pakai dari kamus UI.
    const t = useCallback(
        (key) => {
            const entry = uiStrings[key]
            if (!entry) return key
            return entry[lang] ?? entry[DEFAULT_LANG] ?? key
        },
        [lang]
    )

    // Mengambil bahasa yang tepat dari field data. Field yang tidak perlu
    // diterjemahkan (tanggal, URL, nama teknologi) ditulis sebagai string biasa
    // dan dilewatkan apa adanya, jadi tidak semua data harus dibuat kembar.
    const pick = useCallback(
        (value) => {
            if (
                value &&
                typeof value === 'object' &&
                !Array.isArray(value) &&
                ('en' in value || 'id' in value)
            ) {
                return value[lang] ?? value[DEFAULT_LANG]
            }
            return value
        },
        [lang]
    )

    const value = useMemo(
        () => ({ lang, setLang, t, pick }),
        [lang, t, pick]
    )

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLang() {
    const ctx = useContext(LanguageContext)
    if (!ctx) {
        throw new Error('useLang harus dipanggil di dalam LanguageProvider')
    }
    return ctx
}
