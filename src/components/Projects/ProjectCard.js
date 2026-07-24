import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

function ProjectCard({ project }) {
    const {
        name,
        kind,
        context,
        role,
        desc,
        contribution,
        tags,
        image,
        imageFit,
        demo,
        code,
        status,
    } = project;

    return (
        <article className='project'>
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
                <p className='project__context'>{context}</p>

                <h3 className='project__name'>{name}</h3>
                <p className='project__kind'>{kind}</p>

                <p className='project__desc'>{desc}</p>

                <p className='project__contribution'>
                    <span>Peran saya</span>
                    {contribution}
                </p>

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
                                <FiGithub aria-hidden='true' />
                                Kode
                            </a>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
}

export default ProjectCard;
