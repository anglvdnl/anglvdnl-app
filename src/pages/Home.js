import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import arrow from '../assets/icons/EmailArrow.svg';
import { ReactComponent as BigCircle } from '../assets/icons/LogoBigCircle.svg';
import { ReactComponent as SmallCircle } from '../assets/icons/LogoSmallCircle.svg';
import routeSphere from '../assets/images/EbeyshaSfera.svg';
import longArrow from '../assets/icons/LongArrow.svg';
import spheres from '../assets/images/Spheres.png';
import styles from '../scss/pages/Home.module.scss';
import { motion } from 'framer-motion';
import text from '../lang/en.json';
import Button from '../UI/Button/Button';
import { Link, useLocation } from 'react-router-dom';
import useMediaQuery from '../hooks/useMediaQuery.ts';
import BurgerMenu from '../components/BurgerMenu/BurgerMenu';
import { homeVariants } from './variants/HomeVariants';

function Home() {
    const loc = useLocation()

    if (loc.pathname === "/" ) {
        document.body.style.overflow = "hidden"
    }

    const isTablet = useMediaQuery('(max-width: 1150px)');
    const isNavbarBreakpoint = useMediaQuery('(max-width: 1200px)');

    const [isNavigationOpen, setIsNavigationOpen] = useState(false);

    const handleNavigationToggle = () => {
        setIsNavigationOpen(prevState => !prevState);
    };

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
                                variants={homeVariants.imageVariants}
                                initial="hidden"
                                animate="visible"
                                custom={isTablet}
                                src={spheres}
                                alt=""/>
                        </div>
                    </div>
                    <div className={styles.wrapper__logo}>
                        <motion.div
                            variants={homeVariants.bigCircleVariants}
                            initial={'hidden'}
                            animate={'visible'}
                            className={styles.circleWrapper}
                        >
                            <BigCircle/>
                        </motion.div>
                        <motion.div
                            variants={homeVariants.smallCircleVariants}
                            initial={'hidden'}
                            animate={'visible'}
                            className={styles.circleWrapper}
                        >
                            <SmallCircle/>
                        </motion.div>
                        <motion.p
                            variants={homeVariants.dLogoVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            D
                        </motion.p>
                        <motion.p
                            variants={homeVariants.aLogoVariants}
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
                            variants={homeVariants.whoIAmSpheres}
                            initial="hidden"
                            animate="visible"
                            className={styles.otherRoute}
                        >
                            {/*TODO: spheres rotation on hover*/}
                            <img className={styles.otherRoute__spheres} src={routeSphere} alt=""/>
                            <motion.div
                                className={styles.otherRoute__text}
                                variants={homeVariants.whoIAmText}
                                initial="hidden"
                                animate="visible"
                            >
                                <p>{text.WHO_AM_I}</p>
                                <motion.img
                                    variants={homeVariants.whoIAmArrow}
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
        </>
    );
}

export default Home;