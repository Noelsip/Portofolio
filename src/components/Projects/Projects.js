import { useMemo, useState } from 'react';

import { projectsData, projectCategories } from '../../data/projectsData';
import ScrambleText from '../Motion/ScrambleText';
import Wipe from '../Motion/Wipe';
import ProjectCard from './ProjectCard';
import './Projects.css';

// Yang punya gambar tampil dulu di grid bawah. Array.sort stabil, jadi urutan
// asli di dalam masing-masing kelompok tetap terjaga.
const byImageFirst = (list) =>
    [...list].sort((a, b) => Number(Boolean(b.image)) - Number(Boolean(a.image)));

const featured = projectsData.filter((p) => p.featured);
const rest = byImageFirst(projectsData.filter((p) => !p.featured));

// Tombol filter yang isinya kosong tidak usah ditampilkan sama sekali.
const filters = projectCategories
    .map((cat) => ({
        ...cat,
        count:
            cat.key === 'semua'
                ? projectsData.length
                : projectsData.filter((p) => p.categories?.includes(cat.key))
                      .length,
    }))
    .filter((cat) => cat.count > 0);

function Projects() {
    const [filter, setFilter] = useState('semua');

    // Saat difilter, pemisahan unggulan dan lainnya dilepas: orang yang sudah
    // memilih satu kategori ingin melihat daftar utuhnya, bukan hierarki saya.
    const filtered = useMemo(() => {
        if (filter === 'semua') return null;
        return byImageFirst(
            projectsData.filter((p) => p.categories?.includes(filter))
        );
    }, [filter]);

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

                <div
                    className='projects__filter'
                    role='group'
                    aria-label='Saring proyek menurut jenis pekerjaan'
                >
                    {filters.map((cat) => (
                        <button
                            key={cat.key}
                            type='button'
                            className={`projects__filterBtn ${
                                filter === cat.key ? 'is-active' : ''
                            }`}
                            aria-pressed={filter === cat.key}
                            onClick={() => setFilter(cat.key)}
                        >
                            {cat.label}
                            <span className='projects__filterCount'>
                                {cat.count}
                            </span>
                        </button>
                    ))}
                </div>

                {filtered ? (
                    <div className='projects__grid'>
                        {filtered.map((project) => (
                            <div className='projects__cell' key={project.id}>
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        <div className='projects__featured'>
                            {featured.map((project, i) => (
                                <Wipe key={project.id} delay={0.05}>
                                    <ProjectCard
                                        project={project}
                                        featured
                                        flipped={i % 2 === 1}
                                    />
                                </Wipe>
                            ))}
                        </div>

                        {rest.length > 0 && (
                            <div className='projects__more'>
                                <div className='projects__groupHead'>
                                    <h3 className='projects__groupTitle'>
                                        proyek lain
                                    </h3>
                                    <span className='projects__groupNote'>
                                        {rest.length} proyek
                                    </span>
                                </div>

                                <div className='projects__grid'>
                                    {rest.map((project, i) => (
                                        <Wipe
                                            className='projects__cell'
                                            key={project.id}
                                            delay={(i % 2) * 0.08}
                                        >
                                            <ProjectCard project={project} />
                                        </Wipe>
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
}

export default Projects;
