import { skillsData } from '../../data/skillsData';
import Reveal from '../Reveal/Reveal';
import './Skills.css';

function Skills() {
    return (
        <section className='section section--tint skills' id='skills'>
            <div className='shell'>
                <Reveal as='div' className='section-head'>
                    <span className='section-head__index'>05</span>
                    <h2 className='section-head__title'>Kemampuan</h2>
                    <span className='section-head__note'>Praktik &amp; alat</span>
                </Reveal>

                <div className='skills__grid'>
                    {skillsData.map((group, i) => (
                        <Reveal
                            key={group.id}
                            className='skills__group'
                            delay={i * 80}
                        >
                            <h3 className='skills__groupName'>
                                <span className='skills__groupIndex'>
                                    0{i + 1}
                                </span>
                                {group.group}
                            </h3>
                            <ul className='skills__items'>
                                {group.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
