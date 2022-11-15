import React from 'react';
import {Link} from "react-router-dom";
import styles from './NavbarItem.module.scss'
import arrow from '../../assets/NavbarArrow.svg'

function NavbarItem({value, link, desc}) {
    return (
        <Link to={link}>
            <div className={styles.navItem}>
                <div className={styles.navItem__titleGroup}>
                    <p>{value}</p>
                    <img src={arrow} alt=""/>
                </div>
                <p className={styles.navItem__text}>{desc}</p>
            </div>
        </Link>
    );
}

export default NavbarItem;