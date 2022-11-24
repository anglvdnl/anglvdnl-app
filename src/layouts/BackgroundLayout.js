import React, {useEffect, useRef, useState} from 'react';
import {noise} from '../libs/noiseBg';
import styles from './BackgroundLayout.module.scss';

function BackgroundLayout({children}) {
    const noiseCanvasRef = useRef(null);

    useEffect(() => {
        noise(noiseCanvasRef.current);
    }, []);

    return (
        <div className={styles.background}>
            <canvas
                id="noise"
                ref={noiseCanvasRef}
                className={styles.noise}
            ></canvas>
            <>{children}</>
        </div>
    );
}

export default BackgroundLayout;