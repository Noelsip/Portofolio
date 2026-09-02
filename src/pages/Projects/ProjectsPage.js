import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import { Footer, Navbar } from '../../components'
import ProjectList from '../../components/Projects/ProjectList'
import ScrambleText from '../../components/Motion/ScrambleText'
import Wipe from '../../components/Motion/Wipe'
import { projectsData } from '../../data/projectsData'
import { headerData } from '../../data/headerData'
import { useLang } from '../../i18n/LanguageContext'
import './ProjectsPage.css'

/**
 * Daftar proyek lengkap dipindah ke halaman sendiri. Beranda cukup memajang
 * yang unggulan, jadi orang sampai ke Pengalaman dan Kontak tanpa harus
 * melewati empat belas kartu lebih dulu.
 */
function ProjectsPage() {
    const { t, pick } = useLang()

    return (
        <div>
            <Helmet>
                <title>
                    {t('projects.title')} | {headerData.shortName}
                </title>
                <meta
                    name='description'
                    content={pick(headerData.metaDescription)}
                />
            </Helmet>

            <Navbar />
            <main className='section projectsPage'>
                <div className='shell'>
                    <Wipe as='div' className='projectsPage__back'>
                        <Link to='/' className='projectsPage__backLink'>
                            <FiArrowLeft aria-hidden='true' />
                            {t('projects.back')}
                        </Link>
                    </Wipe>

                    <div className='section-head'>
                        <ScrambleText
                            as='h1'
                            text={t('projects.title')}
                            className='section-head__title'
                        />
                        <Wipe
                            as='span'
                            className='section-head__note'
                            delay={0.15}
                        >
                            {projectsData.length} {t('projects.count')}
                        </Wipe>
                    </div>

                    <Wipe as='p' className='projects__lede'>
                        {t('projects.lede')}
                    </Wipe>

                    <ProjectList />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default ProjectsPage
