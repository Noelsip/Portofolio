import { Helmet } from 'react-helmet'

import {
    About,
    Contacts,
    Currently,
    Experience,
    Footer,
    Landing,
    Navbar,
    Organizations,
    Projects,
    Skills,
} from '../../components'
import { headerData } from '../../data/headerData'

/**
 * Urutannya: kenali orangnya, pahami cara kerjanya, lihat buktinya, baru
 * rekam jejaknya. Keahlian naik ke atas Proyek supaya orang sudah punya
 * kerangka sebelum melihat tiga belas kartu proyek.
 */
function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.shortName} | {headerData.title}</title>
                <meta name='description' content={headerData.metaDescription} />
            </Helmet>

            <Navbar />
            <main>
                <Landing />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Organizations />
                <Currently />
                <Contacts />
            </main>
            <Footer />
        </div>
    )
}

export default Main
