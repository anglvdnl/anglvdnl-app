import React from 'react';
import { motion } from 'framer-motion';
import styles from './Initials.module.scss';
import text from '../../lang/en.json';

function Initials(props) {

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
        <motion.div
            className={styles.name}
            variants={nameVariants}
            initial="hidden"
            animate="visible"
        >
            <p>{text.NAME}</p>
            <p>{text.SURNAME}</p>
        </motion.div>
    );
}

export default Initials;