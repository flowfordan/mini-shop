import React from "react";
import styles from './ErrorIndicator.module.css';
import ErrorImg from '../../common/ErrorImg.png'

const ErrorIndicator = () => {
    return(
        <div className={styles.wrapper}>
            <img alt='error' src={ErrorImg} className={styles.image}></img>
            <p className={styles.main}>Error! Something went wrong...</p>
            <p className={styles.secondary}>Actually that was programmed to simulate the server, just refresh the page</p>
        </div>
    )
}

export default ErrorIndicator;
