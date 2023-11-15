import React from 'react';
import styles from './Input.module.scss'

function Input({inputType, name, id, value, ...props}) {
    return (
        <input
            className={styles.input}
            type={inputType}
            name={name}
            id={id}
            value={value}
            {...props}
            required
        />
    );
}

export default Input;