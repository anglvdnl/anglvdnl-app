import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import styles from '../scss/pages/Projects.module.scss';
import ProjectsList from '../components/ProjectsList/ProjectsList';
import { motion } from 'framer-motion';
import { projects } from '../data/ProjectsData/projectsList';
import useMediaQuery from '../hooks/useMediaQuery.ts';
import BurgerMenu from '../components/BurgerMenu/BurgerMenu';
import { useLocation } from 'react-router-dom';

function Projects(props) {
    const loc = useLocation();
    if (loc.pathname === '/projects') {
        document.body.style.overflow = 'auto';
    }

    const isNavbarBreakpoint = useMediaQuery('(max-width: 1200px)');
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);

    const handleNavigationToggle = () => {
        setIsNavigationOpen(prevState => !prevState);
    };

    const headingVariants = {
        hidden: {
            opacity: 0,
            y: -20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: isNavbarBreakpoint ? 0.4 : 0.8
            }
        }
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
                <motion.h1
                    variants={headingVariants}
                    initial={'hidden'}
                    animate={'visible'}
                >
                    Here’s my projects, that i worked in.
                </motion.h1>
                <ProjectsList projects={projects}/>
            </div>
        </>
    );
}

export default Projects;