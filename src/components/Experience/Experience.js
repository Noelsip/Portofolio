import { FiArrowUpRight } from 'react-icons/fi';

import { workData } from '../../data/workData';
import { educationData } from '../../data/educationData';
import ScrambleText from '../Motion/ScrambleText';
import Wipe from '../Motion/Wipe';
import './Experience.css';

/**
 * Tab "Kerja / Organisasi" dilepas. Organisasi sekarang punya section sendiri,
 * jadi tidak ada lagi separuh isi bagian ini yang tersembunyi di balik klik.
 */
function Experience() {
    return (
        <section className='section experience' id='experience'>
            <div className='shell'>
                <div className='section-head'>
                    <ScrambleText
                        as='h2'
                        text='pengalaman'
                        className='section-head__title'
                    />
                    <Wipe as='span' className='section-head__note' delay={0.15}>
                        {workData.length} peran
                    </Wipe>
                </div>

                <ol className='exp__work'>
                    {workData.map((job, i) => (
                        <Wipe
                            as='li'
                            key={job.id}
                            className='exp__workItem'
                            delay={i * 0.06}
                        >
                            <div className='exp__period'>
                                {job.startYear} - {job.endYear}
                            </div>

                            <div className='exp__workBody'>
                                <h3 className='exp__role'>{job.role}</h3>

                                <p className='exp__company'>
                                    {job.companyUrl ? (
                                        <a
                                            href={job.companyUrl}
                                            target='_blank'
                                            rel='noreferrer'
                                            className='link-wipe'
                                        >
                                            {job.company}
                                            <FiArrowUpRight aria-hidden='true' />
                                        </a>
                                    ) : (
                                        job.company
                                    )}
                                    <span className='exp__location'>
                                        {job.location}
                                    </span>
                                </p>

                                <p className='exp__summary'>{job.summary}</p>

                                <ul className='exp__points'>
                                    {job.points.map((point, p) => (
                                        <li key={p}>{point}</li>
                                    ))}
                                </ul>

                                {job.certificate && (
                                    <a
                                        href={job.certificate}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='exp__cert link-wipe'
                                    >
                                        Lihat sertifikat
                                        <FiArrowUpRight aria-hidden='true' />
                                    </a>
                                )}
                            </div>
                        </Wipe>
                    ))}
                </ol>

                <Wipe className='exp__edu'>
                    <h3 className='eyebrow'>Pendidikan</h3>
                    {educationData.map((edu) => (
                        <div className='exp__eduRow' key={edu.id}>
                            <span className='exp__eduPeriod'>
                                {edu.startYear} - {edu.endYear}
                            </span>
                            <div>
                                <h4 className='exp__eduCourse'>{edu.course}</h4>
                                <p className='exp__eduInst'>
                                    {edu.institution}
                                    {edu.detail && (
                                        <span className='exp__location'>
                                            {edu.detail}
                                        </span>
                                    )}
                                </p>
                            </div>
                        </div>
                    ))}
                </Wipe>
            </div>
        </section>
    );
}

export default Experience;
