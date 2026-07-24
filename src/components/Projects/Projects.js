import { motion } from 'motion/react';

import { projectsData } from '../../data/projectsData';
import ScrambleText from '../Motion/ScrambleText';
import Wipe from '../Motion/Wipe';
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects() {
    if (!projectsData.length) return null;

    return (
        <section className='section projects' id='projects'>
            <div className='shell'>
                <div className='section-head'>
                    <ScrambleText
                        as='h2'
                        text='proyek'
                        className='section-head__title'
                    />
                    <Wipe as='span' className='section-head__note' delay={0.15}>
                        {projectsData.length} proyek
                    </Wipe>
                </div>

                <Wipe as='p' className='projects__lede'>
                    Produk yang saya bangun dan kelola di Twenti Studio, sistem
                    klien yang saya uji sebelum serah terima, serta proyek
                    kuliah dan mandiri yang jadi dasarnya. Label di tiap kartu
                    menandai apa yang saya kerjakan di sana.
                </Wipe>

                {/* Cells rise instead of wiping: a clip-path here would crop
                    the corners of the card as it tilts in 3D. */}
                <div className='projects__grid'>
                    {projectsData.map((project, i) => (
                        <motion.div
                            key={project.id}
                            className='projects__cell'
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px -80px 0px' }}
                            transition={{
                                duration: 0.7,
                                delay: (i % 2) * 0.1,
                                ease: [0.22, 0.61, 0.36, 1],
                            }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
