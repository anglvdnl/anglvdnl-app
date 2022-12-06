import React from 'react';
import styles from './NavbarMobile.module.scss';
import Burger from '../Burger/Burger';
import Initials from '../Initials/Initials';

function NavbarMobile({handleMenu}) {

    return (
        <div className={styles.navbar}>
            <Initials />
            <Burger
                onClickHandler={handleMenu}
            />
        </div>
    );
}

export default NavbarMobile;