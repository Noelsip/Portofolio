import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FiArrowUpRight } from 'react-icons/fi';

import { workData } from '../../data/workData';
import { organizationData } from '../../data/organizationData';
import { educationData } from '../../data/educationData';
import ScrambleText from '../Motion/ScrambleText';
import Wipe from '../Motion/Wipe';
import './Experience.css';

const TABS = [
    { key: 'kerja', label: 'Kerja', count: workData.length },
    { key: 'organisasi', label: 'Organisasi', count: organizationData.length },
];

const EASE = [0.22, 0.61, 0.36, 1];

function WorkList() {
    return (
        <ol className='exp__work'>
            {workData.map((job, i) => (
                <motion.li
                    key={job.id}
                    className='exp__workItem'
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
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
                            <span className='exp__location'>{job.location}</span>
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
                </motion.li>
            ))}
        </ol>
    );
}

function OrganizationList() {
    return (
        <ol className='exp__orgs'>
            {organizationData.map((org, i) => (
                <motion.li
                    key={org.id}
                    className='exp__orgItem'
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
                >
                    <span className='exp__period'>
                        {org.startYear} - {org.endYear}
                    </span>
                    <h3 className='exp__orgRole'>{org.role}</h3>
                    <p className='exp__orgName'>{org.organization}</p>
                    <p className='exp__orgDesc'>{org.description}</p>
                </motion.li>
            ))}
        </ol>
    );
}

function Experience() {
    const [tab, setTab] = useState('kerja');

    return (
        <section className='section experience' id='experience'>
            <div className='shell'>
                <div className='section-head'>
                    <ScrambleText
                        as='h2'
                        text='pengalaman'
                        className='section-head__title'
                    />
                </div>

                <div className='exp__tabs' role='tablist' aria-label='Jenis pengalaman'>
                    {TABS.map((t) => (
                        <button
                            key={t.key}
                            type='button'
                            role='tab'
                            id={`tab-${t.key}`}
                            aria-selected={tab === t.key}
                            aria-controls={`panel-${t.key}`}
                            className={`exp__tab ${
                                tab === t.key ? 'is-active' : ''
                            }`}
                            onClick={() => setTab(t.key)}
                        >
                            {t.label}
                            <span className='exp__tabCount'>{t.count}</span>
                            {tab === t.key && (
                                <motion.span
                                    className='exp__tabBar'
                                    layoutId='exp-tab-bar'
                                    transition={{
                                        type: 'spring',
                                        stiffness: 420,
                                        damping: 34,
                                    }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                <div
                    className='exp__panel'
                    role='tabpanel'
                    id={`panel-${tab}`}
                    aria-labelledby={`tab-${tab}`}
                >
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={tab}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.32, ease: EASE }}
                        >
                            {tab === 'kerja' ? (
                                <WorkList />
                            ) : (
                                <OrganizationList />
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

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
