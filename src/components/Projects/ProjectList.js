import { useMemo, useState } from 'react';

import { projectsData, projectCategories } from '../../data/projectsData';
import { useLang } from '../../i18n/LanguageContext';
import Wipe from '../Motion/Wipe';
import Rise from '../Motion/Rise';
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

/**
 * Daftar lengkap dengan filter. Dipakai di halaman Proyek, bukan di beranda.
 */
function ProjectList() {
    const { t, pick } = useLang();
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
        <>
            <div
                className='projects__filter'
                role='group'
                aria-label={t('projects.filterLabel')}
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
                        {pick(cat.label)}
                        <span className='projects__filterCount'>
                            {cat.count}
                        </span>
                    </button>
                ))}
            </div>

            {filtered ? (
                <div className='projects__grid'>
                    {filtered.map((project, i) => (
                        <Rise
                            className='projects__cell'
                            key={project.id}
                            delay={(i % 2) * 0.08}
                        >
                            <ProjectCard project={project} />
                        </Rise>
                    ))}
                </div>
            ) : (
                <>
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

                    {rest.length > 0 && (
                        <div className='projects__more'>
                            <Wipe className='projects__groupHead'>
                                <h2 className='projects__groupTitle'>
                                    {t('projects.otherTitle')}
                                </h2>
                                <span className='projects__groupNote'>
                                    {rest.length} {t('projects.count')}
                                </span>
                            </Wipe>

                            <div className='projects__grid'>
                                {rest.map((project, i) => (
                                    <Rise
                                        className='projects__cell'
                                        key={project.id}
                                        delay={(i % 2) * 0.08}
                                    >
                                        <ProjectCard project={project} />
                                    </Rise>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    );
}

export default ProjectList;
