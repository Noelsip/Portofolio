import { Helmet } from 'react-helmet'

import {
    About,
    Contacts,
    Experience,
    Footer,
    Landing,
    Navbar,
    Projects,
    Skills,
} from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.shortName} | {headerData.title}</title>
                <meta name='description' content={headerData.description} />
            </Helmet>

            <Navbar />
            <main>
                <Landing />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Contacts />
            </main>
            <Footer />
        </div>
    )
}

export default Main
