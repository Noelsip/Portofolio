import { organizationData } from '../../data/organizationData';
import { educationData } from '../../data/educationData';
import ScrambleText from '../Motion/ScrambleText';
import Wipe from '../Motion/Wipe';
import './Organizations.css';

function Organizations() {
    return (
        <section className='section organizations' id='organizations'>
            <div className='shell'>
                <div className='section-head'>
                    <ScrambleText
                        as='h2'
                        text='organisasi'
                        className='section-head__title'
                    />
                    <Wipe as='span' className='section-head__note' delay={0.15}>
                        Peran kepemimpinan dan pendidikan
                    </Wipe>
                </div>

                <div className='organizations__grid'>
                    <ol className='organizations__list'>
                        {organizationData.map((org, i) => (
                            <Wipe
                                as='li'
                                key={org.id}
                                className='organizations__item'
                                delay={i * 0.07}
                            >
                                <span className='organizations__period'>
                                    {org.startYear} - {org.endYear}
                                </span>
                                <h3 className='organizations__role'>
                                    {org.role}
                                </h3>
                                <p className='organizations__org'>
                                    {org.organization}
                                </p>
                                <p className='organizations__desc'>
                                    {org.description}
                                </p>
                            </Wipe>
                        ))}
                    </ol>

                    <Wipe as='aside' className='organizations__edu' delay={0.16}>
                        <h3 className='eyebrow'>Pendidikan</h3>
                        {educationData.map((edu) => (
                            <div className='organizations__eduItem' key={edu.id}>
                                <p className='organizations__eduPeriod'>
                                    {edu.startYear} - {edu.endYear}
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
                    </Wipe>
                </div>
            </div>
        </section>
    );
}

export default Organizations;
