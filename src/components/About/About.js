import { aboutData } from '../../data/aboutData';
import { useLang } from '../../i18n/LanguageContext';
import ScrambleText from '../Motion/ScrambleText';
import Wipe from '../Motion/Wipe';
import './About.css';

function About() {
    const { t, pick } = useLang();

    return (
        <section className='section about' id='about'>
            <div className='shell'>
                <div className='section-head'>
                    <ScrambleText
                        as='h2'
                        text={t('about.title')}
                        className='section-head__title'
                    />
                </div>

                <div className='about__grid'>
                    <div className='about__prose'>
                        {aboutData.paragraphs.map((text, i) => (
                            <Wipe as='p' key={i} delay={i * 0.09}>
                                {pick(text)}
                            </Wipe>
                        ))}
                    </div>

                    <Wipe as='dl' className='about__facts' delay={0.14}>
                        {aboutData.facts.map((fact) => (
                            <div className='about__fact' key={fact.label.en}>
                                <dt>{pick(fact.label)}</dt>
                                <dd>{pick(fact.value)}</dd>
                            </div>
                        ))}
                    </Wipe>
                </div>
            </div>
        </section>
    );
}

export default About;
