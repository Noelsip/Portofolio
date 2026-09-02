import { Helmet } from 'react-helmet'

import {
    About,
    Contacts,
    Currently,
    Experience,
    Footer,
    Landing,
    Navbar,
    Projects,
    Skills,
} from '../../components'
import { headerData } from '../../data/headerData'
import { useLang } from '../../i18n/LanguageContext'

/**
 * Urutannya dibangun untuk menahan orang tetap menggulir: kenali orangnya,
 * pahami cara kerjanya, lalu langsung lihat buktinya. Proyek unggulan naik ke
 * atas Pengalaman karena itu bagian yang paling membuat orang penasaran, dan
 * daftar lengkapnya sudah pindah ke halaman sendiri supaya beranda tidak
 * kehabisan napas di tengah.
 */
function Main() {
    const { pick } = useLang()

    return (
        <div>
            <Helmet>
                <title>{headerData.shortName} | {headerData.title}</title>
                <meta
                    name='description'
                    content={pick(headerData.metaDescription)}
                />
            </Helmet>

            <Navbar />
            <main>
                <Landing />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Currently />
                <Contacts />
            </main>
            <Footer />
        </div>
    )
}

export default Main
