import React from 'react';
import styles from './Navbar.module.scss'
import text from '../../lang/en.json'
import {motion} from "framer-motion";
import NavbarItem from "../NavbarItem/NavbarItem";

function Navbar(props) {
    const navbarItems = [
        {value: text.HOME, link: '/', desc: text.HOME_DESC},
        {value: text.ABOUT_ME, link: '/about', desc: text.AB_ME_DESC},
        {value: text.PROJECTS, link: '/projects', desc: text.PROJECTS_DESC},
        {value: text.CONTACTS, link: '/contact', desc: text.CONTACTS_DESC},
    ];

    const nameVariants = {
        hidden: {
            opacity: 0,
            y: -100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                type: "spring",
                damping: 10
            }
        },
    }

    const navbarVariants = {
        hidden: {
            opacity: 0,
            x: -100,
        },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.3 + i * 0.1,
                ease: 'anticipate',
                duration: 0.5,
            },
        }),
    }

    return (
        <div className={styles.navbar}>
            <motion.div
                className={styles.navbar__name}
                variants={nameVariants}
                initial="hidden"
                animate="visible"
            >
                <p>{text.NAME}</p>
                <p>{text.SURNAME}</p>
            </motion.div>
            <div className={styles.navbar__group}>
                {navbarItems.map((item, index) => (
                    <motion.div
                        key={item.value}
                        variants={navbarVariants}
                        initial="hidden"
                        animate="visible"
                        custom={index}
                    >
                        <NavbarItem value={item.value} link={item.link} desc={item.desc}/>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Navbar;