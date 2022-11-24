import React from 'react';
import styles from './Project.module.scss';
import dotLine from '../../assets/horizontalDotLine.png';
import arrow from '../../assets/VisitSiteArrow.svg';
import { motion } from 'framer-motion';

function Project({number, title, desc, skills, img, link, isReversed}) {

    const isEven = (n) => {
        return n % 2 === 0;
    }

    const headingVariants = {
        number: {
            hidden: {
                opacity: 0,
                y: -20
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
                    delay: 1.6
                }
            }
        },
        heading: {
            hidden: {
                opacity: 0,
                y: -20
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
                    delay: 1.6
                }
            }
        }
    };

    const textVariants = {
        hidden: {
            opacity: 0,
            y: -20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 1.8
            }
        }
    };

    const skillsVariants = {
        line: {
            hidden: {
                width: 0,
                top: 33
            },
            visible: {
                width: 400,
                transition: {
                    duration: 1,
                    delay: 1.8
                }
            }
        },
        skills: {
            hidden: (i) => ({
                opacity: 0,
                y: isEven(i) ? 50 : -50
            }),
            visible: (i) => ({
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5 + i * 0.1,
                    ease: 'easeInOut',
                    delay: 1.9
                }
            })
        }
    };

    const linkVariants = {
        hidden: {
            opacity: 0,
            y: -20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 2
            }
        }
    };

    return (
        <div
            className={`${styles.project} ${isReversed ? styles['project-reversed'] : null}`}
        >
            <div className={styles.project__info}>
                <div className={styles.info__title}>
                    <motion.p
                        variants={headingVariants.number}
                        initial={'hidden'}
                        animate={'visible'}
                    >0{number}.
                    </motion.p>
                    <motion.p
                        variants={headingVariants.heading}
                        initial={'hidden'}
                        animate={'visible'}
                    >{title}</motion.p>
                </div>
                <motion.p
                    variants={textVariants}
                    initial={'hidden'}
                    animate={'visible'}
                    className={styles.info__text}>
                    {desc}
                </motion.p>
                <div className={styles.info__skills}>
                    <motion.img
                        variants={skillsVariants.line}
                        initial={"hidden"}
                        animate={"visible"}
                        src={dotLine}
                        alt=""
                    />
                    <div className={styles.skillsList}>
                        {skills.map((x, index) => (
                            <motion.div
                                variants={skillsVariants.skills}
                                initial={"hidden"}
                                animate={"visible"}
                                custom={index}
                                key={index}
                                className={styles.skillsItem}
                            >
                                <p>{x}</p>
                                <span></span>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <motion.div
                    variants={textVariants}
                    initial={'hidden'}
                    animate={'visible'}
                    className={styles.info__link}
                >
                    <a href={link}
                       target="_blank"
                       rel="noopener noreferrer"
                       className={link === '' ? styles.disabled : null}
                    >
                        <p>{link !== '' ? 'Visit Site' : 'In Dev'}</p>
                        <img src={arrow} alt=""/>
                    </a>
                </motion.div>
            </div>
            <motion.img src={img} alt="" className={styles.project__img}/>
        </div>
    );
}

export default Project;