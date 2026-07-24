import { skillsData } from '../../data/skillsData';
import ScrambleText from '../Motion/ScrambleText';
import Wipe from '../Motion/Wipe';
import './Skills.css';

function Skills() {
    return (
        <section className='section skills' id='skills'>
            <div className='shell'>
                <div className='section-head'>
                    <ScrambleText
                        as='h2'
                        text='kemampuan'
                        className='section-head__title'
                    />
                </div>

                <div className='skills__grid'>
                    {skillsData.map((group, i) => (
                        <Wipe
                            key={group.id}
                            className='skills__group'
                            delay={i * 0.08}
                        >
                            <h3 className='skills__groupName'>{group.group}</h3>
                            <ul className='skills__items'>
                                {group.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </Wipe>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
