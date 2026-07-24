import { Helmet } from 'react-helmet'

import {
    About,
    Contacts,
    Footer,
    Landing,
    Navbar,
    Organizations,
    Projects,
    Skills,
    Work,
} from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} — {headerData.role}</title>
                <meta name='description' content={headerData.description} />
            </Helmet>

            <Navbar />
            <main>
                <Landing />
                <About />
                <Work />
                <Organizations />
                <Projects />
                <Skills />
                <Contacts />
            </main>
            <Footer />
        </div>
    )
}

export default Main
