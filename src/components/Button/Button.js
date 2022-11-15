import React from 'react';
import styles from './Button.module.scss'

function Button({children, variant, isSubmit, ...props}) {
    return (
        <button
            type={isSubmit ? 'submit' : 'button'}
            className={`${styles.button} ${variant === 'default' ? styles.default : styles.outline}`}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;