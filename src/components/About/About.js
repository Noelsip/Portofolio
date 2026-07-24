import { aboutData } from '../../data/aboutData';
import Reveal from '../Reveal/Reveal';
import './About.css';

function About() {
    return (
        <section className='section section--tint about' id='about'>
            <div className='shell'>
                <Reveal as='div' className='section-head'>
                    <span className='section-head__index'>01</span>
                    <h2 className='section-head__title'>{aboutData.title}</h2>
                </Reveal>

                <div className='about__grid'>
                    <div className='about__prose'>
                        {aboutData.paragraphs.map((text, i) => (
                            <Reveal as='p' key={i} delay={i * 80}>
                                {text}
                            </Reveal>
                        ))}
                    </div>

                    <Reveal as='dl' className='about__facts' delay={120}>
                        {aboutData.facts.map((fact) => (
                            <div className='about__fact' key={fact.label}>
                                <dt>{fact.label}</dt>
                                <dd>{fact.value}</dd>
                            </div>
                        ))}
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

export default About;
