import { aboutData } from '../../data/aboutData';
import ScrambleText from '../Motion/ScrambleText';
import Wipe from '../Motion/Wipe';
import './About.css';

function About() {
    return (
        <section className='section about' id='about'>
            <div className='shell'>
                <div className='section-head'>
                    <ScrambleText
                        as='h2'
                        text='tentang saya'
                        className='section-head__title'
                    />
                </div>

                <div className='about__grid'>
                    <div className='about__prose'>
                        {aboutData.paragraphs.map((text, i) => (
                            <Wipe as='p' key={i} delay={i * 0.09}>
                                {text}
                            </Wipe>
                        ))}
                    </div>

                    <Wipe as='dl' className='about__facts' delay={0.14}>
                        {aboutData.facts.map((fact) => (
                            <div className='about__fact' key={fact.label}>
                                <dt>{fact.label}</dt>
                                <dd>{fact.value}</dd>
                            </div>
                        ))}
                    </Wipe>
                </div>
            </div>
        </section>
    );
}

export default About;
