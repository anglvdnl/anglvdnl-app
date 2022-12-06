import React from 'react';
import styles from './NavbarDesktop.module.scss';
import NavbarItem from '../NavbarItem/NavbarItem';
import Initials from '../Initials/Initials';
import { navbarItems } from '../../data/NavbarData/navbarItems';

function NavbarDesktop(props) {

    return (
        <div className={styles.navbar}>
            <Initials />
            <div className={styles.navbar__group}>
                {navbarItems.map((item, index) => (
                    <NavbarItem key={index} value={item.value} link={item.link} desc={item.desc} index={index}/>
                ))}
            </div>
        </div>
    );
}

export default NavbarDesktop;