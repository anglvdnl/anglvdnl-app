import React, { useCallback, useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery.ts';
import Navbar from '../components/Navbar/Navbar';
import BurgerMenu from '../components/BurgerMenu/BurgerMenu';
import styles from '../scss/pages/Contacts.module.scss';
import linkedIn from '../assets/icons/linkedin.svg';
import github from '../assets/icons/github.svg';
import telegram from '../assets/icons/telegram.svg';
import instagram from '../assets/icons/instagram.svg';
import mail from '../assets/icons/mail.svg';
import phone from '../assets/icons/phone.svg';
import location from '../assets/icons/location.svg';
import text from '../lang/en.json';
import Button from '../UI/Button/Button';
import { motion } from 'framer-motion';
import { contactsVariants, infoVariants } from './variants/ContactsVariants';
import Input from '../UI/Input/Input';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Contacts() {
    const loc = useLocation();
    if (loc.pathname === '/contacts') {
        document.body.style.overflow = 'hidden';
    }

    const isNavbarBreakpoint = useMediaQuery('(max-width: 1200px)');
    const isDesktop = useMediaQuery('(max-width: 1410px)');
    const IsMobile600 = useMediaQuery('(max-width: 600px)');

    const [isNavigationOpen, setIsNavigationOpen] = useState(false);

    const handleNavigationToggle = () => {
        setIsNavigationOpen(prevState => !prevState);
    };

    const socials = [
        {img: linkedIn, link: process.env.REACT_APP_LINKEDIN_LINK},
        {img: github, link: process.env.REACT_APP_GITHUB_LINK},
        {img: telegram, link: process.env.REACT_APP_TELEGRAM_LINK},
        {img: instagram, link: process.env.REACT_APP_INSTAGRAM_LINK}
    ];

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: {error: false, msg: null}
    });
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = useCallback(e => {
        e.persist();
        setInputs(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
        setStatus({
            submitted: false,
            submitting: false,
            info: {error: false, msg: null}
        });
    }, []);

    const handleServerResponse = useCallback((isOk, msg) => {
        if (isOk) {
            setStatus({
                submitted: true,
                submitting: false,
                info: {error: false, msg}
            });

            setInputs({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } else {
            setStatus({
                submitted: false,
                submitting: false,
                info: {error: true, msg}
            });

            setInputs({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }
    }, []);

    const handleSubmit = useCallback(e => {
        e.preventDefault();

        setStatus(prevStatus => ({
            ...prevStatus,
            submitting: true
        }));

        axios({
            method: 'POST',
            url: process.env.REACT_APP_FORM_ENDPOINT_URL,
            data: inputs
        }).then(() => {
            handleServerResponse(true, 'Thank you, your message has been sent.');
        }).catch((error) => {
            console.log(error);
        });
    }, [handleServerResponse, inputs]);

    return (
        <>
            {isNavigationOpen && (
                <BurgerMenu handleNavigationToggle={handleNavigationToggle}/>
            )}
            <div className={styles.container}>
                <Navbar
                    isBreakpoint={isNavbarBreakpoint}
                    handleNavigationToggle={handleNavigationToggle}
                />
                <motion.div
                    className={styles.contacts}
                    variants={contactsVariants.contacts}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className={styles.contacts__wrapper}
                        variants={contactsVariants.input}
                        initial="hidden"
                        animate="visible"
                    >
                        {status.submitted ? (
                            <div className={styles.attention}>
                                {text.CONTACT_SOON}
                            </div>
                        ) : (
                            <>
                                <h1>{text.CONTACT_ME}</h1>
                                <p>{text.REACH_OUT}</p>
                                <form
                                    action="#"
                                    onSubmit={handleSubmit}
                                    method="post"
                                >
                                    <Input
                                        onChange={handleInputChange}
                                        placeholder={'Name'}
                                        type={'text'}
                                        id={'name'}
                                        name={'Name'}
                                        value={inputs.name}
                                    />
                                    <Input
                                        onChange={handleInputChange}
                                        placeholder={'Email'}
                                        type={'email'}
                                        id={'email'}
                                        name={'Email'}
                                        value={inputs.email}
                                    />
                                    <Input
                                        onChange={handleInputChange}
                                        placeholder={'Message'}
                                        type={'text'}
                                        id={'message'}
                                        name={'Message'}
                                        value={inputs.message}
                                    />
                                    <Button
                                        isSubmit={true}
                                        variant="default"
                                    >
                                        Send
                                    </Button>
                                    {status.info.error && (
                                        <div>
                                            <strong
                                                style={{
                                                    fontWeight: 'bold',
                                                    color: '#fff'
                                                }}
                                            >
                                                {text.INVALID_DATA}
                                            </strong>
                                        </div>
                                    )}
                                </form>
                            </>
                        )}
                    </motion.div>
                </motion.div>
                <motion.div
                    className={styles.info}
                    variants={infoVariants.info}
                    initial="hidden"
                    animate="visible"
                    custom={{isDesktop: isDesktop, isTablet: isNavbarBreakpoint, isMobile: IsMobile600}}
                >
                    <div className={styles.info__text}>
                        <h2>{text.INFO}</h2>
                        <span>
                        <img src={mail} alt=""/>
                        <p>{text.EMAIL}</p>
                    </span>
                        <span>
                        <img src={phone} alt=""/>
                       <p>{text.PHONE_NUMBER}</p>
                    </span>
                        <span>
                        <img src={location} alt=""/>
                        <p>{text.LOCATION}</p>
                    </span>
                    </div>
                    <div className={styles.info__socials}>
                        {socials.map((social, index) => (
                            <motion.a
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={infoVariants.socials}
                                initial="hidden"
                                animate="visible"
                                custom={index}
                                key={index}
                            >
                                <img src={social.img} alt=""/>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default Contacts;