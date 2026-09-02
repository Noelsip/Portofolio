import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import { projectsData } from '../../data/projectsData';
import { useLang } from '../../i18n/LanguageContext';
import ScrambleText from '../Motion/ScrambleText';
import Wipe from '../Motion/Wipe';
import Rise from '../Motion/Rise';
import ProjectCard from './ProjectCard';
import './Projects.css';

const featured = projectsData.filter((p) => p.featured);

/**
 * Versi beranda. Isinya cuma proyek unggulan, karena empat belas kartu di satu
 * halaman membuat orang berhenti menggulir sebelum sampai ke Pengalaman.
 * Daftar lengkapnya ada di halaman Proyek.
 */
function Projects() {
    const { t } = useLang();

    if (!featured.length) return null;

    return (
        <section className='section projects' id='projects'>
            <div className='shell'>
                <div className='section-head'>
                    <ScrambleText
                        as='h2'
                        text={t('projects.homeTitle')}
                        className='section-head__title'
                    />
                </div>

                <Wipe as='p' className='projects__lede'>
                    {t('projects.homeLede')}
                </Wipe>

                {/* Rise, bukan Wipe: blok judul kartu menjorok keluar
                    kotaknya, dan clip-path akan memotongnya. */}
                <div className='projects__featured'>
                    {featured.map((project, i) => (
                        <Rise key={project.id} delay={0.05}>
                            <ProjectCard
                                project={project}
                                featured
                                flipped={i % 2 === 1}
                            />
                        </Rise>
                    ))}
                </div>

                <Wipe className='projects__all'>
                    <Link to='/projects' className='projects__allLink'>
                        {t('projects.viewAll')}
                        <span className='projects__allCount'>
                            {projectsData.length}
                        </span>
                        <FiArrowRight aria-hidden='true' />
                    </Link>
                </Wipe>
            </div>
        </section>
    );
}

export default Projects;
