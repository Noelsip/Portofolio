import { FiArrowUpRight } from 'react-icons/fi';

import { useLang } from '../../i18n/LanguageContext';

/**
 * Kartu proyek. Tilt 3D dan parallax gambar sengaja dilepas: gerakan yang
 * mengikuti kursor membuat kartu terus bergoyang saat orang membaca isinya,
 * dan itu yang bikin bagian ini terasa kurang profesional. Karakter kartu
 * sekarang datang dari susunan blok judul yang menimpa tepi gambar, bukan
 * dari gerak.
 *
 * Blok judul itu memakai margin negatif, jadi sebagian isinya berada di luar
 * kotak kartu. Pembungkusnya tidak boleh memakai clip-path, karena yang
 * menjorok itulah yang akan terpotong. Pakai Rise, jangan Wipe.
 */
function ProjectCard({ project, featured = false, flipped = false }) {
    const { t, pick } = useLang();

    const {
        name,
        kind,
        context,
        role,
        desc,
        tags,
        image,
        imageFit,
        demo,
        code,
        status,
    } = project;

    const className = [
        'project',
        featured ? 'project--featured' : '',
        featured && flipped ? 'is-flipped' : '',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <article className={className}>
            <div
                className={`project__media ${
                    image ? '' : 'project__media--empty'
                } ${imageFit === 'contain' ? 'project__media--contain' : ''}`}
            >
                {image ? (
                    <img
                        src={image}
                        alt={`${t('project.preview')} ${name}`}
                        loading='lazy'
                    />
                ) : (
                    <span className='project__mediaMark' aria-hidden='true'>
                        {name}
                    </span>
                )}

                {/* Kedua label dibungkus supaya bisa dipindahkan bersama ke
                    sisi media yang tidak tertimpa blok judul. */}
                <div className='project__badges'>
                    <span className='project__role'>{pick(role)}</span>
                    {status && (
                        <span className='project__status'>{pick(status)}</span>
                    )}
                </div>
            </div>

            <div className='project__body'>
                <h3 className='project__name'>{name}</h3>
                <p className='project__kind'>
                    {pick(kind)}
                    <span className='project__context'>{pick(context)}</span>
                </p>

                <p className='project__desc'>{pick(desc)}</p>

                <ul className='project__tags'>
                    {tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>

                {(demo || code) && (
                    <div className='project__links'>
                        {demo && (
                            <a
                                href={demo}
                                target='_blank'
                                rel='noreferrer'
                                className='project__link link-wipe'
                            >
                                {t('project.view')}
                                <FiArrowUpRight aria-hidden='true' />
                            </a>
                        )}
                        {code && (
                            <a
                                href={code}
                                target='_blank'
                                rel='noreferrer'
                                className='project__link link-wipe'
                            >
                                {t('project.code')}
                                <FiArrowUpRight aria-hidden='true' />
                            </a>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
}

export default ProjectCard;
