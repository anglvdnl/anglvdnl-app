import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import BackgroundLayout from "../layouts/BackgroundLayout";
import title from '../assets/Title.svg'
import arrow from '../assets/EmailArrow.svg'
import bcircle from '../assets/LogoBigCircle.svg'
import scircle from '../assets/LogoSmallCircle.svg'
import styles from '../scss/pages/Home.module.scss'
import {motion} from 'framer-motion'
import text from '../lang/en.json'
import Button from "../components/Button/Button";

function Home(props) {
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
            },
        },
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
                <header>
                    <Navbar/>
                </header>
                <div className={styles.wrapper}>
                    <div className={styles.wrapper__info}>
                        <div className={styles.wrapper__title}>
                            <img src={title} alt=""/>
                        </div>
                        <div className={styles.wrapper__btns}>
                            <a
                                href="https://drive.google.com/file/d/1SIxe0Rmn9c9oP8pKU2F44HZh83muqQb-/view?usp=share_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.cvButton}
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
                        <img src={bcircle} alt=""/>
                        <img src={scircle} alt=""/>
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
            </BackgroundLayout>
        </>
    );
}

export default Home;