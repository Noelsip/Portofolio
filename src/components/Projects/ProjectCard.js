import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

const SPRING = { stiffness: 260, damping: 22, mass: 0.6 };

function ProjectCard({ project }) {
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

    const ref = useRef(null);

    // Pointer position within the card, normalised to -0.5..0.5.
    const px = useMotionValue(0);
    const py = useMotionValue(0);

    const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [7, -7]), SPRING);
    const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-9, 9]), SPRING);

    // The image drifts opposite the tilt, which reads as depth rather than
    // the whole card being one flat plane that happens to rotate.
    const imageX = useSpring(useTransform(px, [-0.5, 0.5], [14, -14]), SPRING);
    const imageY = useSpring(useTransform(py, [-0.5, 0.5], [10, -10]), SPRING);

    const handleMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        px.set((e.clientX - rect.left) / rect.width - 0.5);
        py.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleLeave = () => {
        px.set(0);
        py.set(0);
    };

    return (
        <motion.article
            ref={ref}
            className='project'
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{ rotateX, rotateY, transformPerspective: 1100 }}
        >
            <div
                className={`project__media ${
                    image ? '' : 'project__media--empty'
                } ${imageFit === 'contain' ? 'project__media--contain' : ''}`}
            >
                {image ? (
                    <motion.img
                        src={image}
                        alt={`Tampilan ${name}`}
                        loading='lazy'
                        style={{ x: imageX, y: imageY }}
                    />
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
                                <FiGithub aria-hidden='true' />
                                Kode
                            </a>
                        )}
                    </div>
                )}
            </div>
        </motion.article>
    );
}

export default ProjectCard;
