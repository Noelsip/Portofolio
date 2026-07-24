import { useEffect, useState } from 'react';
import { useForm } from '@formspree/react';
import isEmail from 'validator/lib/isEmail';
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

import { contactsData } from '../../data/contactsData';
import { socialsData } from '../../data/socialsData';
import Reveal from '../Reveal/Reveal';
import './Contacts.css';

const socials = [
    { key: 'linkedIn', href: socialsData.linkedIn, Icon: FaLinkedinIn, label: 'LinkedIn' },
    { key: 'github', href: socialsData.github, Icon: FaGithub, label: 'GitHub' },
    { key: 'instagram', href: socialsData.instagram, Icon: FaInstagram, label: 'Instagram' },
    { key: 'youtube', href: socialsData.youtube, Icon: FaYoutube, label: 'YouTube' },
];

function Contacts() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(null);

    const [state, submitToFormspree] = useForm('xldnvoww');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !message.trim()) {
            setStatus({ type: 'error', text: 'Semua kolom perlu diisi.' });
            return;
        }

        if (!isEmail(email)) {
            setStatus({ type: 'error', text: 'Format email belum benar.' });
            return;
        }

        setStatus(null);
        submitToFormspree(e);
    };

    useEffect(() => {
        if (state.succeeded) {
            setStatus({
                type: 'ok',
                text: 'Pesan terkirim. Saya balas lewat email secepatnya.',
            });
            setName('');
            setEmail('');
            setMessage('');
        } else if (state.errors && state.errors.length) {
            setStatus({
                type: 'error',
                text: 'Pesan gagal terkirim. Coba lagi, atau kirim langsung ke email di samping.',
            });
        }
    }, [state.succeeded, state.errors]);

    return (
        <section className='section contacts' id='contacts'>
            <div className='shell'>
                <Reveal as='div' className='section-head'>
                    <span className='section-head__index'>06</span>
                    <h2 className='section-head__title'>Kontak</h2>
                </Reveal>

                <div className='contacts__grid'>
                    <Reveal className='contacts__intro'>
                        <p className='contacts__lede'>
                            Terbuka untuk peran product management, quality
                            assurance, dan software engineering, baik magang,
                            paruh waktu, maupun proyek.
                        </p>

                        <dl className='contacts__details'>
                            <div className='contacts__detail'>
                                <dt>Email</dt>
                                <dd>
                                    <a
                                        className='link-wipe'
                                        href={`mailto:${contactsData.email}`}
                                    >
                                        {contactsData.email}
                                    </a>
                                </dd>
                            </div>
                            <div className='contacts__detail'>
                                <dt>Telepon</dt>
                                <dd>
                                    <a
                                        className='link-wipe'
                                        href={`tel:${contactsData.phone}`}
                                    >
                                        {contactsData.phone}
                                    </a>
                                </dd>
                            </div>
                            <div className='contacts__detail'>
                                <dt>Lokasi</dt>
                                <dd>{contactsData.address}</dd>
                            </div>
                        </dl>

                        <div className='contacts__socials'>
                            {socials
                                .filter((s) => s.href)
                                .map(({ key, href, Icon, label }) => (
                                    <a
                                        key={key}
                                        href={href}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='contacts__social'
                                    >
                                        <Icon aria-hidden='true' />
                                        {label}
                                        <FiArrowUpRight aria-hidden='true' />
                                    </a>
                                ))}
                        </div>
                    </Reveal>

                    <Reveal
                        as='form'
                        className='contacts__form'
                        onSubmit={handleSubmit}
                        delay={100}
                    >
                        <div className='field'>
                            <label htmlFor='contact-name'>Nama</label>
                            <input
                                id='contact-name'
                                name='name'
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Nama kamu'
                            />
                        </div>

                        <div className='field'>
                            <label htmlFor='contact-email'>Email</label>
                            <input
                                id='contact-email'
                                name='email'
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='nama@email.com'
                            />
                        </div>

                        <div className='field'>
                            <label htmlFor='contact-message'>Pesan</label>
                            <textarea
                                id='contact-message'
                                name='message'
                                rows='5'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder='Tulis pesan kamu di sini'
                            />
                        </div>

                        <button
                            type='submit'
                            className='btn btn--solid contacts__submit'
                            disabled={state.submitting}
                        >
                            {state.submitting ? 'Mengirim…' : 'Kirim pesan'}
                        </button>

                        {status && (
                            <p
                                className={`contacts__status contacts__status--${status.type}`}
                                role='status'
                            >
                                {status.text}
                            </p>
                        )}
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

export default Contacts;
