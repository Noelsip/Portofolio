import { FiArrowUpRight } from 'react-icons/fi';

import { workData } from '../../data/workData';
import Reveal from '../Reveal/Reveal';
import './Work.css';

function Work() {
    return (
        <section className='section work' id='work'>
            <div className='shell'>
                <Reveal as='div' className='section-head'>
                    <span className='section-head__index'>02</span>
                    <h2 className='section-head__title'>Pengalaman Kerja</h2>
                    <span className='section-head__note'>
                        {workData.length} peran
                    </span>
                </Reveal>

                <ol className='work__list'>
                    {workData.map((job, i) => (
                        <Reveal as='li' key={job.id} className='work__item' delay={i * 90}>
                            <div className='work__period'>
                                <span>{job.startYear}</span>
                                <span className='work__periodDash' aria-hidden='true' />
                                <span>{job.endYear}</span>
                            </div>

                            <div className='work__body'>
                                <h3 className='work__role'>{job.role}</h3>

                                <p className='work__company'>
                                    {job.companyUrl ? (
                                        <a
                                            href={job.companyUrl}
                                            target='_blank'
                                            rel='noreferrer'
                                            className='work__companyLink link-wipe'
                                        >
                                            {job.company}
                                            <FiArrowUpRight aria-hidden='true' />
                                        </a>
                                    ) : (
                                        job.company
                                    )}
                                    <span className='work__location'>
                                        {job.location}
                                    </span>
                                </p>

                                <p className='work__summary'>{job.summary}</p>

                                <ul className='work__points'>
                                    {job.points.map((point, p) => (
                                        <li key={p}>{point}</li>
                                    ))}
                                </ul>

                                {job.certificate && (
                                    <a
                                        href={job.certificate}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='work__cert link-wipe'
                                    >
                                        Lihat sertifikat
                                        <FiArrowUpRight aria-hidden='true' />
                                    </a>
                                )}
                            </div>
                        </Reveal>
                    ))}
                </ol>
            </div>
        </section>
    );
}

export default Work;
