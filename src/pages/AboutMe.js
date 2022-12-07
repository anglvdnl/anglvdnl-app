import React, { useState } from 'react';
import BackgroundLayout from '../layouts/BackgroundLayout';
import Navbar from '../components/Navbar/Navbar';
import styles from '../scss/pages/AboutMe.module.scss';
import text from '../lang/en.json';
import { motion } from 'framer-motion';
import me from '../assets/images/me.jpg';
import pc from '../assets/images/pc.jpg';
import dotLine from '../assets/images/dotLine.png';
import horizontalDotLine from '../assets/images/horizontalDotLine.png';
import apples from '../assets/images/apples.jpg';
import house from '../assets/images/house.jpg';
import useMediaQuery from '../hooks/useMediaQuery.ts';
import BurgerMenu from '../components/BurgerMenu/BurgerMenu';

function AboutMe() {

    const isDesktop = useMediaQuery('(max-width: 1410px)');
    const isTablet = useMediaQuery('(max-width: 1200px)');
    const isPhone1010 = useMediaQuery('(max-width: 1010px)');
    const isPhone870 = useMediaQuery('(max-width: 870px)');
    const isPhone650 = useMediaQuery('(max-width: 650px)');

    function isMatch(initialValue, desktopValue, tabletValue, phoneValue) {
        if (isDesktop && !isTablet && !isPhone1010 && !isPhone870) {
            return desktopValue;
        } else if (isDesktop && isTablet && !isPhone1010 && !isPhone870) {
            return tabletValue;
        } else if (isDesktop && isTablet && isPhone1010 && !isPhone870) {
            return initialValue;
        } else if (isDesktop && isTablet && isPhone1010 && isPhone870) {
            return phoneValue;
        } else {
            return initialValue;
        }
    }

    const isNavbarBreakpoint = useMediaQuery('(max-width: 1200px)');

    const [isNavigationOpen, setIsNavigationOpen] = useState(false);

    const handleNavigationToggle = () => {
        setIsNavigationOpen(prevState => !prevState);
    };

    const hrVariants = {
        hidden: {
            width: isMatch(150, 150, 50, 50)
        },
        visible: {
            width: isMatch(300, 300, 250, 150),
            transition: {
                ease: 'easeInOut',
                duration: 0.6,
                delay: 0.7
            }
        }
    };

    const dotLineVariants = {
        hidden: {
            height: 0,
            top: 0,
            right: 9
        },
        visible: {
            height: isMatch(348, 250, 250, 250),
            right: 9,
            transition: {
                ease: 'easeInOut',
                duration: 1,
                delay: 0.8
            }
        }
    };

    const infoSectionVariants = {
        hidden: {
            height: 0,
        },
        visible: {
            height: "100vh",
            transition: {
                ease: 'easeInOut',
                duration: 1,
                delay: 0.4
            }
        }
    }

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
                <div className={styles.wrapper}>
                    <div className={styles.intro}>
                        <div className={styles.intro__title}>
                            <h1>{text.ABOUT_ME_TITLE}</h1>
                            <motion.hr
                                variants={hrVariants}
                                initial="hidden"
                                animate="visible"
                            />
                        </div>
                        <div className={styles.intro__img}>
                            <img src={me} alt=""/>
                        </div>
                    </div>
                    <motion.div
                        className={styles.info}
                        variants={!isPhone1010 && infoSectionVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <span className={styles.boxShadow}></span>
                        <div className={styles.info__text}>
                            <div className={styles.text__section}>
                                <p className={styles.sectionTitle}>{text.INTRODUCE}</p>
                                <p className={styles.sectionText}>{text.TEXT_2022}</p>
                                <div className={styles.illustration}>
                                    {isPhone650
                                        ? null
                                        : <div className={styles.illustration__date}>
                                            <p>2022</p>
                                            <span></span>
                                            <motion.img
                                                variants={dotLineVariants}
                                                initial="hidden"
                                                animate="visible"
                                                src={dotLine}
                                                alt=""/>
                                        </div>
                                    }
                                    <img className={`${styles.illustration__img} ${styles.pc}`} src={pc} alt=""/>
                                </div>
                            </div>
                            <div className={styles.text__section}>
                                <p className={`${styles.sectionText} ${styles.invertedSectionText}`}>{text.TEXT_2019}</p>
                                <div className={`${styles.illustration} ${styles['illustration-reversed']}`}>
                                    {isPhone650
                                        ? null
                                        : <div className={styles.illustration__date}>
                                            <span></span>
                                            <p>2019</p>
                                            <motion.img
                                                variants={dotLineVariants}
                                                initial="hidden"
                                                animate="visible"
                                                src={dotLine}
                                                alt=""/>
                                        </div>
                                    }
                                    <img className={`${styles.illustration__img} ${styles.apples}`} src={apples}
                                         alt=""/>
                                </div>
                            </div>
                            <div className={styles.text__section}>
                                <p className={styles.sectionText}>{text.TEXT_CHILDHOOD}</p>
                                <div className={styles.illustration}>
                                    <img className={`${styles.illustration__img} ${styles.house}`} src={house} alt=""/>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;