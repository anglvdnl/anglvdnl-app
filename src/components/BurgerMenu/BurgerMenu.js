import React from 'react';
import styles from './BurgerMenu.module.scss'
import NavbarItem from '../NavbarItem/NavbarItem';
import Burger from '../Burger/Burger';
import { navbarItems } from '../../data/NavbarData/navbarItems';

function BurgerMenu({handleNavigationToggle}) {

    return (
        <div className={styles['navigation-menu']}>
            <div className={styles.container}>
                <Burger
                    onClickHandler={handleNavigationToggle}
                    toggleMode="cross"
                    className={styles.burger}
                />
                <div className={styles.burgerItems}>
                    {navbarItems.map((item, index) => (
                        <NavbarItem key={index} link={item.link} value={item.value} desc={null} index={index} isBurger={true} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BurgerMenu;