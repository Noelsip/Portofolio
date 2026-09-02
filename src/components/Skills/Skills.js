import { capabilitiesData } from '../../data/capabilitiesData';
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
                        text='keahlian'
                        className='section-head__title'
                    />
                </div>

                <Wipe as='p' className='skills__lede'>
                    Empat hal yang saya kerjakan, dan alat yang saya pakai untuk
                    mengerjakannya. Bagian atas menjelaskan cara saya bekerja,
                    bagian bawah untuk yang ingin langsung melihat detail
                    teknisnya.
                </Wipe>

                <div className='skills__capabilities'>
                    {capabilitiesData.map((cap, i) => (
                        <Wipe
                            key={cap.id}
                            className='skills__capability'
                            delay={i * 0.07}
                        >
                            <h3 className='skills__capabilityName'>
                                {cap.name}
                            </h3>
                            <p className='skills__capabilityDesc'>{cap.desc}</p>
                        </Wipe>
                    ))}
                </div>

                <div className='skills__tech'>
                    <Wipe as='h3' className='eyebrow skills__techHead'>
                        Teknologi & Tools
                    </Wipe>

                    <div className='skills__grid'>
                        {skillsData.map((group, i) => (
                            <Wipe
                                key={group.id}
                                className='skills__group'
                                delay={i * 0.06}
                            >
                                <h4 className='skills__groupName'>
                                    {group.group}
                                </h4>
                                <ul className='skills__items'>
                                    {group.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </Wipe>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
