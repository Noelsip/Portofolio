import { FiArrowUpRight } from 'react-icons/fi';

/**
 * Kartu proyek. Tilt 3D dan parallax gambar sengaja dilepas: gerakan yang
 * mengikuti kursor membuat kartu terus bergoyang saat orang membaca isinya,
 * dan itu yang bikin bagian ini terasa kurang profesional. Karakter kartu
 * sekarang datang dari susunan blok judul yang menimpa tepi gambar, bukan
 * dari gerak.
 */
function ProjectCard({ project, featured = false, flipped = false }) {
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
                    <img src={image} alt={`Tampilan ${name}`} loading='lazy' />
                ) : (
                    <span className='project__mediaMark' aria-hidden='true'>
                        {name}
                    </span>
                )}

                <span className='project__role'>{role}</span>
                {status && <span className='project__status'>{status}</span>}
            </div>

            <div className='project__body'>
                <h3 className='project__name'>{name}</h3>
                <p className='project__kind'>
                    {kind}
                    <span className='project__context'>{context}</span>
                </p>

                <p className='project__desc'>{desc}</p>

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
                                Lihat
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
                                Kode
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
