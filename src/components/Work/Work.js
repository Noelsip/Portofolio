import { FiArrowUpRight } from 'react-icons/fi';

import { workData } from '../../data/workData';
import ScrambleText from '../Motion/ScrambleText';
import Wipe from '../Motion/Wipe';
import './Work.css';

function Work() {
    return (
        <section className='section work' id='work'>
            <div className='shell'>
                <div className='section-head'>
                    <ScrambleText
                        as='h2'
                        text='pengalaman kerja'
                        className='section-head__title'
                    />
                </div>

                <ol className='work__list'>
                    {workData.map((job, i) => (
                        <Wipe
                            as='li'
                            key={job.id}
                            className='work__item'
                            delay={i * 0.08}
                        >
                            <div className='work__period'>
                                {job.startYear} - {job.endYear}
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
                        </Wipe>
                    ))}
                </ol>
            </div>
        </section>
    );
}

export default Work;
