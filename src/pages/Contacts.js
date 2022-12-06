import React, { useState } from 'react';
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

function Contacts(props) {

    const isNavbarBreakpoint = useMediaQuery('(max-width: 1200px)');
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

    const socialVariants = {
        hidden: {
            opacity: 0,
            y: -100
        },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                ease: 'anticipate',
                delay: 2 + i * 0.1,
                duration: 1
            }
        })
    };

    const contactsVariants = {
        hidden: {
            opacity: 0,
            height: 0
        },
        visible: {
            opacity: 1,
            height: '100vh',
            transition: {
                ease: 'easeInOut',
                duration: 0.8,
                delay: 0.3
            }
        }
    };

    const inputVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                ease: 'easeInOut',
                duration: 0.4,
                delay: 1
            }
        }
    };

    const infoVariants = {
        hidden: {
            opacity: 0,
            width: 0
        },
        visible: {
            opacity: 1,
            width: 800,
            transition: {
                ease: "easeInOut",
                duration: 1,
                delay: 1.5
            }
        }
    };
    return (
        <>
            {isNavigationOpen && (
                <BurgerMenu handleNavigationToggle={handleNavigationToggle}/>
            )}
            <div className={styles.container}>
                <header>
                    <Navbar
                        isBreakpoint={isNavbarBreakpoint}
                        handleNavigationToggle={handleNavigationToggle}
                    />
                </header>
                <motion.div
                    className={styles.contacts}
                    variants={contactsVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className={styles.contacts__wrapper}
                        variants={inputVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1>{text.CONTACT_ME}</h1>
                        <p>{text.REACH_OUT}</p>
                        <input placeholder="Name" type="text"/>
                        <input placeholder="Email" type="text"/>
                        <input placeholder="Message" type="text"/>
                        <Button children="Send" isSubmit={true} variant="default"/>
                    </motion.div>
                </motion.div>
                <motion.div
                    className={styles.info}
                    variants={infoVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className={styles.info__text}>
                        <h2>Info</h2>
                        <span>
                        <img src={mail} alt=""/>
                        <p>1angelovdaniel@gmail.com</p>
                    </span>
                        <span>
                        <img src={phone} alt=""/>
                       <p>+380 (95) 139 75 46</p>
                    </span>
                        <span>
                        <img src={location} alt=""/>
                        <p>Denmark</p>
                    </span>
                    </div>
                    <div className={styles.info__socials}>
                        {socials.map((social, index) => (
                            <motion.a
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={socialVariants}
                                initial="hidden"
                                animate="visible"
                                custom={index}
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