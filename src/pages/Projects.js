import React from 'react';
import BackgroundLayout from '../layouts/BackgroundLayout';
import Navbar from '../components/Navbar/Navbar';
import styles from '../scss/pages/Projects.module.scss';
import ProjectsList from '../components/ProjectsList/ProjectsList';
import { motion } from 'framer-motion';

function Projects(props) {

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
                delay: 1.3
            }
        }
    }

    return (
        <BackgroundLayout>
            <div
                className={styles.container}
            >
                <header>
                    <Navbar/>
                </header>
                <motion.h1
                    variants={headingVariants}
                    initial={"hidden"}
                    animate={"visible"}
                >
                    Here’s my projects, that i worked in.
                </motion.h1>
                <ProjectsList/>
            </div>
        </BackgroundLayout>
    );
}

export default Projects;