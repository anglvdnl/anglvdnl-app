import React from 'react';
import BackgroundLayout from '../layouts/BackgroundLayout';
import Navbar from '../components/Navbar/Navbar';
import styles from '../scss/pages/AboutMe.module.scss';
import text from '../lang/en.json';
import { motion } from 'framer-motion';
import me from '../assets/me.jpg';
import pc from '../assets/pc.jpg';
import dotLine from '../assets/dotLine.png';
import apples from '../assets/apples.jpg';
import house from '../assets/house.jpg';

function AboutMe() {

    const hrVariants = {
        hidden: {
            width: 150
        },
        visible: {
            width: 300,
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
            height: 348,
            right: 9,
            transition: {
                ease: 'easeInOut',
                duration: 1,
                delay: 0.8
            }
        }
    };
    // TODO: Add some text
    return (
        <BackgroundLayout>
            <div className={styles.container}>
                <header>
                    <Navbar/>
                </header>
                <div className={styles.wrapper}>
                    <div className={styles.wrapper__title}>
                        <h1>{text.ABOUT_ME_TITLE}</h1>
                        <motion.hr
                            variants={hrVariants}
                            initial="hidden"
                            animate="visible"
                        />
                    </div>
                    <div className={styles.wrapper__img}>
                        <img src={me} alt=""/>
                    </div>
                </div>
                <div className={styles.info}>
                    <span className={styles.boxShadow}></span>
                    <div className={styles.info__text}>
                        <div className={styles.text__section}>
                            <p className={styles.sectionTitle}>I’m Daniel, nice to meet you!</p>
                            <p className={styles.sectionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.Lorem ipsum
                                dolor sit amtur.</p>
                            <div className={styles.illustration}>
                                <div className={styles.illustration__date}>
                                    <p>2022</p>
                                    <span></span>
                                    <motion.img
                                        variants={dotLineVariants}
                                        initial="hidden"
                                        animate="visible"
                                        src={dotLine}
                                        alt=""/>
                                </div>
                                <img className={`${styles.illustration__img} ${styles.pc}`} src={pc} alt=""/>
                            </div>
                        </div>
                        <div className={styles.text__section}>
                            <p className={`${styles.sectionText} ${styles.invertedSectionText}`}>Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim.Lorem ipsum dolor sit amtur.</p>
                            <div className={`${styles.illustration} ${styles['illustration-reversed']}`}>
                                <div className={styles.illustration__date}>
                                    <span></span>
                                    <p>2019</p>
                                    <motion.img
                                        variants={dotLineVariants}
                                        initial="hidden"
                                        animate="visible"
                                        src={dotLine}
                                        alt=""/>
                                </div>
                                <img className={`${styles.illustration__img} ${styles.apples}`} src={apples} alt=""/>
                            </div>
                        </div>
                        <div className={styles.text__section}>
                            <p className={styles.sectionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.Lorem ipsum
                                dolor sit amtur.</p>
                            <div className={styles.illustration}>
                                <img className={`${styles.illustration__img} ${styles.house}`} src={house} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BackgroundLayout>
    );
}

export default AboutMe;