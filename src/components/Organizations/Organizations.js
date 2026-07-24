import { organizationData } from '../../data/organizationData';
import { educationData } from '../../data/educationData';
import Reveal from '../Reveal/Reveal';
import './Organizations.css';

function Organizations() {
    return (
        <section
            className='section section--tint organizations'
            id='organizations'
        >
            <div className='shell'>
                <Reveal as='div' className='section-head'>
                    <span className='section-head__index'>03</span>
                    <h2 className='section-head__title'>
                        Organisasi &amp; Pendidikan
                    </h2>
                    <span className='section-head__note'>Peran kepemimpinan</span>
                </Reveal>

                <div className='organizations__grid'>
                    <ol className='organizations__list'>
                        {organizationData.map((org, i) => (
                            <Reveal
                                as='li'
                                key={org.id}
                                className='organizations__item'
                                delay={i * 80}
                            >
                                <span className='organizations__period'>
                                    {org.startYear} — {org.endYear}
                                </span>
                                <h3 className='organizations__role'>{org.role}</h3>
                                <p className='organizations__org'>
                                    {org.organization}
                                </p>
                                <p className='organizations__desc'>
                                    {org.description}
                                </p>
                            </Reveal>
                        ))}
                    </ol>

                    <Reveal as='aside' className='organizations__edu' delay={120}>
                        <h3 className='eyebrow'>Pendidikan</h3>
                        {educationData.map((edu) => (
                            <div className='organizations__eduItem' key={edu.id}>
                                <p className='organizations__eduPeriod'>
                                    {edu.startYear} — {edu.endYear}
                                </p>
                                <h4 className='organizations__eduCourse'>
                                    {edu.course}
                                </h4>
                                <p className='organizations__eduInst'>
                                    {edu.institution}
                                </p>
                                {edu.detail && (
                                    <p className='organizations__eduDetail'>
                                        {edu.detail}
                                    </p>
                                )}
                            </div>
                        ))}
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

export default Organizations;
