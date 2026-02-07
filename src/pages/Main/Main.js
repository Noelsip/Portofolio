import { Helmet } from 'react-helmet'

import { About, Achievement, Contacts, Education, Experience, Footer, Landing, Navbar, Projects, Skills } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Portfolio</title>
            </Helmet>

            <Navbar />
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Achievement />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
