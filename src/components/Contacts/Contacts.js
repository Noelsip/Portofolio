import { useEffect, useState } from 'react';
import { useForm } from '@formspree/react';
import isEmail from 'validator/lib/isEmail';
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

import { contactsData } from '../../data/contactsData';
import { socialsData } from '../../data/socialsData';
import { useLang } from '../../i18n/LanguageContext';
import ScrambleText from '../Motion/ScrambleText';
import Wipe from '../Motion/Wipe';
import './Contacts.css';

const socials = [
    { key: 'linkedIn', href: socialsData.linkedIn, Icon: FaLinkedinIn, label: 'LinkedIn' },
    { key: 'github', href: socialsData.github, Icon: FaGithub, label: 'GitHub' },
    { key: 'instagram', href: socialsData.instagram, Icon: FaInstagram, label: 'Instagram' },
    { key: 'youtube', href: socialsData.youtube, Icon: FaYoutube, label: 'YouTube' },
];

function Contacts() {
    const { t, pick } = useLang();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    // Statusnya disimpan sebagai kunci, bukan kalimat jadi, supaya pesannya
    // ikut berganti kalau bahasanya diubah setelah formulir dikirim.
    const [status, setStatus] = useState(null);

    const [state, submitToFormspree] = useForm('xldnvoww');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !message.trim()) {
            setStatus({ type: 'error', key: 'contacts.errEmpty' });
            return;
        }

        if (!isEmail(email)) {
            setStatus({ type: 'error', key: 'contacts.errEmail' });
            return;
        }

        setStatus(null);
        submitToFormspree(e);
    };

    useEffect(() => {
        if (state.succeeded) {
            setStatus({ type: 'ok', key: 'contacts.ok' });
            setName('');
            setEmail('');
            setMessage('');
        } else if (state.errors && state.errors.length) {
            setStatus({ type: 'error', key: 'contacts.errSend' });
        }
    }, [state.succeeded, state.errors]);

    return (
        <section className='section contacts' id='contacts'>
            <div className='shell'>
                <div className='section-head'>
                    <ScrambleText
                        as='h2'
                        text={t('contacts.title')}
                        className='section-head__title'
                    />
                </div>

                <div className='contacts__grid'>
                    <Wipe className='contacts__intro'>
                        <p className='contacts__lede'>{t('contacts.lede')}</p>

                        <dl className='contacts__details'>
                            <div className='contacts__detail'>
                                <dt>{t('contacts.email')}</dt>
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
                                <dt>{t('contacts.phone')}</dt>
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
                                <dt>{t('contacts.location')}</dt>
                                <dd>{pick(contactsData.address)}</dd>
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
                    </Wipe>

                    <Wipe
                        as='form'
                        className='contacts__form'
                        onSubmit={handleSubmit}
                        delay={0.12}
                    >
                        <div className='field'>
                            <label htmlFor='contact-name'>
                                {t('contacts.name')}
                            </label>
                            <input
                                id='contact-name'
                                name='name'
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder={t('contacts.namePlaceholder')}
                            />
                        </div>

                        <div className='field'>
                            <label htmlFor='contact-email'>
                                {t('contacts.email')}
                            </label>
                            <input
                                id='contact-email'
                                name='email'
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={t('contacts.emailPlaceholder')}
                            />
                        </div>

                        <div className='field'>
                            <label htmlFor='contact-message'>
                                {t('contacts.message')}
                            </label>
                            <textarea
                                id='contact-message'
                                name='message'
                                rows='5'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder={t('contacts.messagePlaceholder')}
                            />
                        </div>

                        <button
                            type='submit'
                            className='btn btn--solid contacts__submit'
                            disabled={state.submitting}
                        >
                            {state.submitting
                                ? t('contacts.sending')
                                : t('contacts.send')}
                        </button>

                        {status && (
                            <p
                                className={`contacts__status contacts__status--${status.type}`}
                                role='status'
                            >
                                {t(status.key)}
                            </p>
                        )}
                    </Wipe>
                </div>
            </div>
        </section>
    );
}

export default Contacts;
