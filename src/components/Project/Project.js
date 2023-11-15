import React, { useEffect, useRef } from 'react';
import styles from './Project.module.scss';
import dotLine from '../../assets/images/horizontalDotLine.png';
import arrow from '../../assets/icons/VisitSiteArrow.svg';
import { useAnimation, motion } from 'framer-motion';
import { useIsInViewport } from '../../hooks/useIsInViewport';
import useMediaQuery from '../../hooks/useMediaQuery.ts';
import { projectVariants, skillsVariants } from './ProjectVariants/ProjectVariants';
import { mobileProjectVariants, mobileSkillsVariants } from './ProjectVariants/ProjectMobileVariants';

function Project({number, title, desc, skills, img, link, isReversed}) {

    const isTablet = useMediaQuery('(max-width: 1110px)');
    const IsMobile950 = useMediaQuery('(max-width: 950px)');
    const IsMobile560 = useMediaQuery('(max-width: 560px)');
    const isNavbarBreakpoint = useMediaQuery('(max-width: 1200px)');

    const controls = useAnimation();
    const ref = useRef(null);
    const inViewport = useIsInViewport(ref);

    useEffect(() => {
        if (inViewport) {
            controls.start('visible');
        }
    }, [controls, inViewport]);

    return (
        <div
            className={`${styles.project} 
                ${isReversed ? styles['project-reversed'] : null} 
                ${number > 1 ? styles['next-project'] : null}`}
        >
            <div className={styles.project__info}>
                <div className={styles.info__title}>
                    <motion.p
                        variants={IsMobile950 ? mobileProjectVariants.number : projectVariants.number}
                        initial="hidden"
                        animate={number > 1 ? controls : 'visible'}
                        custom={{isNavbarBreakpoint: isNavbarBreakpoint, number: number}}
                        ref={ref}
                    >0{number}.
                    </motion.p>
                    <motion.p
                        variants={IsMobile950 ? mobileProjectVariants.title : projectVariants.title}
                        initial="hidden"
                        animate={number > 1 ? controls : 'visible'}
                        custom={{isNavbarBreakpoint: isNavbarBreakpoint, number: number}}
                    >{title}</motion.p>
                </div>
                <motion.p
                    variants={IsMobile950 ? mobileProjectVariants.text : projectVariants.text}
                    initial="hidden"
                    animate={number > 1 ? controls : 'visible'}
                    custom={{isNavbarBreakpoint: isNavbarBreakpoint, number: number}}
                    className={styles.info__text}>
                    {desc}
                </motion.p>
                <div className={styles.info__skills}>
                    <motion.img
                        variants={IsMobile950 ? mobileSkillsVariants.line : skillsVariants.line}
                        initial="hidden"
                        animate={number > 1 ? controls : 'visible'}
                        custom={{
                            isNavbarBreakpoint: isNavbarBreakpoint,
                            number: number,
                            isTablet: isTablet,
                            IsMobile560: IsMobile560
                        }}
                        src={dotLine}
                        alt=""
                    />
                    <div className={styles.skillsList}>
                        {skills.map((x, index) => (
                            <motion.div
                                variants={IsMobile950 ? mobileSkillsVariants.skills : skillsVariants.skills}
                                initial="hidden"
                                animate={number > 1 ? controls : 'visible'}
                                custom={{index: index, isNavbarBreakpoint: isNavbarBreakpoint, number: number}}
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
                    variants={IsMobile950 ? mobileProjectVariants.link : projectVariants.link}
                    initial="hidden"
                    animate={number > 1 ? controls : 'visible'}
                    custom={{isNavbarBreakpoint: isNavbarBreakpoint, number: number}}
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
            <div className={styles.project__img}>
                <motion.img
                    variants={IsMobile950 ? mobileProjectVariants.img : projectVariants.img}
                    initial="hidden"
                    animate={number > 1 ? controls : 'visible'}
                    custom={{isNavbarBreakpoint: isNavbarBreakpoint, number: number}}
                    src={img}
                    alt=""
                />
            </div>
        </div>
    );
}

export default Project;