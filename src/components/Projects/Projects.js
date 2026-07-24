import { projectsData } from '../../data/projectsData';
import Reveal from '../Reveal/Reveal';
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects() {
    if (!projectsData.length) return null;

    return (
        <section className='section projects' id='projects'>
            <div className='shell'>
                <Reveal as='div' className='section-head'>
                    <span className='section-head__index'>04</span>
                    <h2 className='section-head__title'>Proyek</h2>
                    <span className='section-head__note'>
                        {projectsData.length} proyek
                    </span>
                </Reveal>

                <Reveal as='p' className='projects__lede'>
                    Produk yang saya bangun dan kelola di Twenti Studio, sistem
                    klien yang saya uji sebelum serah terima, serta proyek kuliah
                    dan mandiri yang jadi dasarnya. Label di tiap kartu menandai
                    apa yang benar-benar saya kerjakan di sana.
                </Reveal>

                <div className='projects__grid'>
                    {projectsData.map((project, i) => (
                        <Reveal
                            key={project.id}
                            className='projects__cell'
                            delay={(i % 2) * 90}
                        >
                            <ProjectCard project={project} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
