import { currentlyData } from '../../data/currentlyData';
import { useLang } from '../../i18n/LanguageContext';
import ScrambleText from '../Motion/ScrambleText';
import Wipe from '../Motion/Wipe';
import './Currently.css';

/**
 * Sisi personal ditaruh di satu tempat, bukan disebar jadi cerita panjang di
 * seluruh halaman. Latarnya gelap supaya jelas bagian ini bicara tentang orang,
 * bukan tentang rekam jejak.
 */
function Currently() {
    const { t, pick } = useLang();

    return (
        <section className='section section--dark now' id='currently'>
            <div className='shell'>
                <div className='section-head'>
                    <ScrambleText
                        as='h2'
                        text={t('currently.title')}
                        className='section-head__title'
                    />
                    <Wipe as='span' className='section-head__note' delay={0.15}>
                        {t('currently.updated')} {pick(currentlyData.updated)}
                    </Wipe>
                </div>

                <dl className='now__list'>
                    {currentlyData.items.map((item, i) => (
                        <Wipe
                            className='now__item'
                            key={item.id}
                            delay={i * 0.07}
                        >
                            <dt className='now__label'>{pick(item.label)}</dt>
                            <dd className='now__value'>{pick(item.value)}</dd>
                        </Wipe>
                    ))}
                </dl>
            </div>
        </section>
    );
}

export default Currently;
