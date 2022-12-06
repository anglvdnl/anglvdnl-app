import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavbarItem.module.scss';
import arrow from '../../assets/icons/NavbarArrow.svg';
import { motion } from 'framer-motion'

function NavbarItem({value, link, desc, index, isBurger}) {

    const navbarVariants = {
        hidden: {
            opacity: 0,
            y: -100
        },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: (isBurger ? 0.2 : 0.4) + i * 0.1,
                ease: 'anticipate',
                duration: 0.5
            }
        })
    };

    return (
        <motion.div
            key={value}
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
            custom={index}
        >
            <Link to={link}>
                <div className={styles.navItem}>
                    <div className={styles.navItem__titleGroup}>
                        <p>{value}</p>
                        <img src={arrow} alt=""/>
                    </div>
                    <p className={styles.navItem__text}>{desc}</p>
                </div>
            </Link>
        </motion.div>

    );
}

export default NavbarItem;