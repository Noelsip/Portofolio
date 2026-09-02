import { organizationData } from '../../data/organizationData';
import ScrambleText from '../Motion/ScrambleText';
import Wipe from '../Motion/Wipe';
import './Organizations.css';

/**
 * Sebelumnya bagian ini bersembunyi di balik tab kedua di Pengalaman, jadi
 * separuh rekam jejak kepemimpinan tidak pernah terlihat kalau orang tidak
 * mengklik. Sekarang berdiri sendiri.
 */
function Organizations() {
    return (
        <section className='section orgs' id='organizations'>
            <div className='shell'>
                <div className='section-head'>
                    <ScrambleText
                        as='h2'
                        text='organisasi'
                        className='section-head__title'
                    />
                    <Wipe as='span' className='section-head__note' delay={0.15}>
                        {organizationData.length} peran
                    </Wipe>
                </div>

                <Wipe as='p' className='orgs__lede'>
                    Peran dengan tanggung jawab pengambilan keputusan, bukan
                    daftar keanggotaan. Ini sisi kerja yang tidak terlihat di
                    repositori kode: mengoordinasi orang, membagi tanggung
                    jawab, dan menjaga program selesai.
                </Wipe>

                <ol className='orgs__list'>
                    {organizationData.map((org, i) => (
                        <Wipe
                            as='li'
                            key={org.id}
                            className='orgs__item'
                            delay={(i % 2) * 0.08}
                        >
                            <span className='orgs__period'>
                                {org.startYear} - {org.endYear}
                            </span>
                            <h3 className='orgs__role'>{org.role}</h3>
                            <p className='orgs__name'>{org.organization}</p>
                            <p className='orgs__desc'>{org.description}</p>
                        </Wipe>
                    ))}
                </ol>
            </div>
        </section>
    );
}

export default Organizations;
