import React from 'react';
import styles from './Burger.module.scss'
import { RxCross1 } from 'react-icons/rx'

function Burger({toggleMode, onClickHandler, ...props}) {

    if (toggleMode === 'burger') {
        return (
            <div {...props}>
                <button
                    className={styles.burger}
                    onClick={() => onClickHandler && onClickHandler()}
                    aria-label="open navigation"
                >
                    <div className={styles.burger__line} />
                    <div className={styles.burger__line} />
                    <div className={styles.burger__line} />
                </button>
            </div>
        );
    } else {
        return (
            <div {...props}>
                <button
                    className={styles.burger}
                    onClick={() => onClickHandler && onClickHandler()}
                >
                    <RxCross1 />
                </button>
            </div>
        );
    }
}

export default Burger;

Burger.defaultProps = {
    toggleMode: 'burger',
};