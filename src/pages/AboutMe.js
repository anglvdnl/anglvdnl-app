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
import { aboutMeVariants } from './variants/AboutMeVariants';
import { useLocation } from 'react-router-dom';

function AboutMe() {
    const loc = useLocation()

    if (loc.pathname === "/about-me" ) {
        document.body.style.overflow = "auto"
    }
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);

    const handleNavigationToggle = () => {
        setIsNavigationOpen(prevState => !prevState);
    };

    const isDesktop = useMediaQuery('(max-width: 1410px)');
    const isTablet = useMediaQuery('(max-width: 1200px)');
    const IsMobile1010 = useMediaQuery('(max-width: 1010px)');
    const IsMobile870 = useMediaQuery('(max-width: 870px)');
    const IsMobile650 = useMediaQuery('(max-width: 650px)');

    function isMatch(initialValue, desktopValue, tabletValue, phoneValue) {
        if (isDesktop && !isTablet && !IsMobile1010 && !IsMobile870) {
            return desktopValue;
        } else if (isDesktop && isTablet && !IsMobile1010 && !IsMobile870) {
            return tabletValue;
        } else if (isDesktop && isTablet && IsMobile1010 && !IsMobile870) {
            return initialValue;
        } else if (isDesktop && isTablet && IsMobile1010 && IsMobile870) {
            return phoneValue;
        } else {
            return initialValue;
        }
    }

    return (
        <>
            {isNavigationOpen && (
                <BurgerMenu handleNavigationToggle={handleNavigationToggle}/>
            )}
            <div className={styles.container}>
                <Navbar
                    isBreakpoint={isTablet}
                    handleNavigationToggle={handleNavigationToggle}
                />
                <div className={styles.wrapper}>
                    <div className={styles.intro}>
                        <div className={styles.intro__title}>
                            <h1>{text.ABOUT_ME_TITLE}</h1>
                            <motion.hr
                                variants={aboutMeVariants.hrVariants}
                                initial="hidden"
                                animate="visible"
                                custom={isMatch}
                            />
                        </div>
                        <div className={styles.intro__img}>
                            <img src={me} alt=""/>
                        </div>
                    </div>
                    <motion.div
                        className={styles.info}
                        variants={aboutMeVariants.infoSectionVariants}
                        initial="hidden"
                        animate="visible"
                        custom={IsMobile1010}
                    >
                        <span className={styles.boxShadow}></span>
                        <div className={styles.info__text}>
                            <div className={styles.text__section}>
                                <p className={styles.sectionTitle}>{text.INTRODUCE}</p>
                                <p className={styles.sectionText}>{text.TEXT_2022}</p>
                                <div className={styles.illustration}>
                                    {IsMobile650
                                        ? null
                                        : <div className={styles.illustration__date}>
                                            <p>2022</p>
                                            <span></span>
                                            <motion.img
                                                variants={aboutMeVariants.dotLineVariants}
                                                initial="hidden"
                                                animate="visible"
                                                custom={isMatch}
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
                                    {IsMobile650
                                        ? null
                                        : <div className={styles.illustration__date}>
                                            <span></span>
                                            <p>2019</p>
                                            <motion.img
                                                variants={aboutMeVariants.dotLineVariants}
                                                initial="hidden"
                                                animate="visible"
                                                custom={isMatch}
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