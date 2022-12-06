import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import BackgroundLayout from '../layouts/BackgroundLayout';
import arrow from '../assets/icons/EmailArrow.svg';
import bcircle from '../assets/icons/LogoBigCircle.svg';
import scircle from '../assets/icons/LogoSmallCircle.svg';
import routeSphere from '../assets/images/EbeyshaSfera.svg';
import longArrow from '../assets/icons/LongArrow.svg';
import spheres from '../assets/images/Spheres.png';
import styles from '../scss/pages/Home.module.scss';
import { motion } from 'framer-motion';
import text from '../lang/en.json';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import useMediaQuery from '../hooks/useMediaQuery.ts';
import BurgerMenu from '../components/BurgerMenu/BurgerMenu';

function Home() {

    const isTablet = useMediaQuery('(max-width: 1150px)');
    const isNavbarBreakpoint = useMediaQuery('(max-width: 1200px)');

    const [isNavigationOpen, setIsNavigationOpen] = useState(false);

    const handleNavigationToggle = () => {
        setIsNavigationOpen(prevState => !prevState);
    };

    const imageVariants = {
        hidden: {
            scale: 0.5,
            translateX: isTablet ? '-30%' : '-45%',
            translateY: '-30%'
        },
        visible: {
            scale: 1,
            translateX: isTablet ? '-30%' : '-45%',
            translateY: '-30%',
            transition: {
                ease: 'easeInOut',
                duration: 0.7,
                delay: 0.6
            }
        }
    };

    const dLogoVariants = {
        hidden: {
            opacity: 0,
            x: -30,
            y: -30,
            translateX: '-50%',
            translateY: '-50%'
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                ease: 'easeInOut',
                duration: 0.4,
                delay: 1.1
            }
        }
    };

    const aLogoVariants = {
        hidden: {
            opacity: 0,
            x: 30,
            y: 30,
            translateX: '-50%',
            translateY: '-50%'
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                ease: 'easeInOut',
                duration: 0.4,
                delay: 1.1
            }
        }
    };

    const whoAmIVariants = {
        spheres: {
            hidden: {
                opacity: 0,
                x: -200
            },
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                    ease: 'easeInOut',
                    duration: 0.8
                }
            }
        },
        text: {
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1,
                transition: {
                    ease: 'easeInOut',
                    duration: 0.6,
                    delay: 0.6
                }
            }
        },
        arrow: {
            hidden: {
                width: 20,
                height: 14
            },
            visible: {
                width: 95,
                height: 14,
                transition: {
                    ease: 'easeInOut',
                    duration: 0.6,
                    delay: 0.6
                }
            }
        }
    };

    return (
        <div className={styles.section}>
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
                    <div className={styles.wrapper__info}>
                        <div className={styles.wrapper__title}>
                            <h1><span>I CAN CREATE</span></h1>
                            <h1>AN AWESOME WEBSITE</h1>
                            <h1>FOR <span>YOUR BUSINESS</span></h1>
                        </div>
                        <div className={styles.wrapper__btns}>
                            <a
                                href={process.env.REACT_APP_CV_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button>
                                    {text.OPEN_CV}
                                </Button>
                            </a>
                            <a href="mailto:1angelovdaniel@gmail.com">
                                <p>{text.SEND_EMAIL}</p>
                                <img src={arrow} alt=""/>
                            </a>
                        </div>
                        <div className={styles.spheres}>
                            <motion.img
                                variants={imageVariants}
                                initial="hidden"
                                animate="visible"
                                src={spheres}
                                alt=""/>
                        </div>
                    </div>
                    <div className={styles.wrapper__logo}>
                        <img src={bcircle} alt="" draggable="false"/>
                        <img src={scircle} alt="" draggable="false"/>
                        <motion.p
                            variants={dLogoVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            D
                        </motion.p>
                        <motion.p
                            variants={aLogoVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            A
                        </motion.p>
                    </div>
                </div>
                {isTablet
                    ? null
                    : <Link to="about-me">
                        <motion.div
                            variants={whoAmIVariants.spheres}
                            initial="hidden"
                            animate="visible"
                            className={styles.otherRoute}
                        >
                            {/*TODO: spheres rotation on hover*/}
                            <img className={styles.otherRoute__spheres} src={routeSphere} alt=""/>
                            <motion.div
                                className={styles.otherRoute__text}
                                variants={whoAmIVariants.text}
                                initial="hidden"
                                animate="visible"
                            >
                                <p>{text.WHO_AM_I}</p>
                                <motion.img
                                    variants={whoAmIVariants.arrow}
                                    initial="hidden"
                                    animate="visible"
                                    src={longArrow}
                                    alt=""
                                />
                            </motion.div>
                        </motion.div>
                    </Link>
                }
            </div>
        </div>
    );
}

export default Home;