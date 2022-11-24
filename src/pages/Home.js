import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import BackgroundLayout from "../layouts/BackgroundLayout";
import arrow from '../assets/EmailArrow.svg'
import bcircle from '../assets/LogoBigCircle.svg'
import scircle from '../assets/LogoSmallCircle.svg'
import routeSphere from '../assets/EbeyshaSfera.svg'
import longArrow from '../assets/LongArrow.svg'
import styles from '../scss/pages/Home.module.scss'
import {motion} from 'framer-motion'
import text from '../lang/en.json'
import Button from "../components/Button/Button";
import {Link} from "react-router-dom";

function Home() {
    const imageVariants = {
        hidden: {
            scale: 0.5,
            translateX: "-25%",
            translateY: "-60%"
        },
        visible: {
            scale: 1,
            transition: {
                ease: 'anticipate',
                duration: 1,
                delay: 0.4
            },
        },
    }

    const dLogoVariants = {
        hidden: {
            opacity: 0,
            x: -30,
            y: -30,
            translateX: "-50%",
            translateY: "-50%"
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                ease: 'easeInOut',
                duration: 0.5,
                delay: 0.6
            },
        },
    }

    const aLogoVariants = {
        hidden: {
            opacity: 0,
            x: 30,
            y: 30,
            translateX: "-50%",
            translateY: "-50%"
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                ease: 'easeInOut',
                duration: 0.5,
                delay: 0.6
            },
        },
    }

    const whoAmIVariants = {
        spheres: {
            hidden: {
                opacity: 0,
                x: -200,
            },
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                    ease: 'easeInOut',
                    duration: 0.6,
                },
            },
        },
        text: {
            hidden: {
                opacity: 0,
            },
            visible: {
                opacity: 1,
                transition: {
                    ease: 'easeInOut',
                    duration: 0.6,
                    delay: 0.6,
                },
            },
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
                    delay: 0.8,
                },
            },
        }
    }

    return (
        <>
            <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                className={styles.spheres}
            ></motion.div>
            <BackgroundLayout>
                <div className={styles.container}>
                    <header>
                        <Navbar/>
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
                    <Link to='about-me'>
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
                </div>
            </BackgroundLayout>
        </>
    );
}

export default Home;