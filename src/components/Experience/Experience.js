import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FiArrowUpRight } from 'react-icons/fi';

import { workData } from '../../data/workData';
import { organizationData } from '../../data/organizationData';
import { educationData } from '../../data/educationData';
import { useLang } from '../../i18n/LanguageContext';
import ScrambleText from '../Motion/ScrambleText';
import Wipe from '../Motion/Wipe';
import './Experience.css';

const EASE = [0.22, 0.61, 0.36, 1];

/**
 * Kerja dan organisasi kembali berbagi satu section lewat tab, seperti versi
 * lama. Beranda jadi jauh lebih pendek daripada kalau keduanya dibentang
 * berurutan, dan itu yang menentukan apakah orang mau terus menggulir.
 */
function WorkList() {
    const { t, pick } = useLang();

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
                        {pick(job.startYear)} - {pick(job.endYear)}
                    </div>

                    <div className='exp__workBody'>
                        <h3 className='exp__role'>{pick(job.role)}</h3>

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

                        <p className='exp__summary'>{pick(job.summary)}</p>

                        <ul className='exp__points'>
                            {job.points.map((point, p) => (
                                <li key={p}>{pick(point)}</li>
                            ))}
                        </ul>

                        {job.certificate && (
                            <a
                                href={job.certificate}
                                target='_blank'
                                rel='noreferrer'
                                className='exp__cert link-wipe'
                            >
                                {t('experience.certificate')}
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
    const { pick } = useLang();

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
                        {pick(org.startYear)} - {pick(org.endYear)}
                    </span>
                    <h3 className='exp__orgRole'>{pick(org.role)}</h3>
                    <p className='exp__orgName'>{pick(org.organization)}</p>
                    <p className='exp__orgDesc'>{pick(org.description)}</p>
                </motion.li>
            ))}
        </ol>
    );
}

function Experience() {
    const { t, pick } = useLang();
    const [tab, setTab] = useState('kerja');

    const tabs = [
        { key: 'kerja', label: t('experience.tabWork'), count: workData.length },
        {
            key: 'organisasi',
            label: t('experience.tabOrg'),
            count: organizationData.length,
        },
    ];

    return (
        <section className='section experience' id='experience'>
            <div className='shell'>
                <div className='section-head'>
                    <ScrambleText
                        as='h2'
                        text={t('experience.title')}
                        className='section-head__title'
                    />
                </div>

                <div
                    className='exp__tabs'
                    role='tablist'
                    aria-label={t('experience.tabsLabel')}
                >
                    {tabs.map((item) => (
                        <button
                            key={item.key}
                            type='button'
                            role='tab'
                            id={`tab-${item.key}`}
                            aria-selected={tab === item.key}
                            aria-controls={`panel-${item.key}`}
                            className={`exp__tab ${
                                tab === item.key ? 'is-active' : ''
                            }`}
                            onClick={() => setTab(item.key)}
                        >
                            {item.label}
                            <span className='exp__tabCount'>{item.count}</span>
                            {tab === item.key && (
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
                    <h3 className='eyebrow'>{t('experience.education')}</h3>
                    {educationData.map((edu) => (
                        <div className='exp__eduRow' key={edu.id}>
                            <span className='exp__eduPeriod'>
                                {pick(edu.startYear)} - {pick(edu.endYear)}
                            </span>
                            <div>
                                <h4 className='exp__eduCourse'>
                                    {pick(edu.course)}
                                </h4>
                                <p className='exp__eduInst'>
                                    {edu.institution}
                                    {edu.detail && (
                                        <span className='exp__location'>
                                            {pick(edu.detail)}
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
