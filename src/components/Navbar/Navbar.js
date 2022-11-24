import React from 'react';
import styles from './Navbar.module.scss';
import text from '../../lang/en.json';
import { motion } from 'framer-motion';
import NavbarItem from '../NavbarItem/NavbarItem';

function Navbar(props) {
    const navbarItems = [
        {value: text.HOME, link: '/', desc: text.HOME_DESC},
        {value: text.ABOUT_ME, link: '/about-me', desc: text.AB_ME_DESC},
        {value: text.PROJECTS, link: '/projects', desc: text.PROJECTS_DESC},
        {value: text.CONTACTS, link: '/contact', desc: text.CONTACTS_DESC}
    ];

    const nameVariants = {
        hidden: {
            opacity: 0,
            y: -100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                type: 'spring',
                damping: 10
            }
        }
    };

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
                    <NavbarItem key={index} value={item.value} link={item.link} desc={item.desc} index={index}/>
                ))}
            </div>
        </div>
    );
}

export default Navbar;