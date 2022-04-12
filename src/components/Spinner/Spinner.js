import React from "react";
import styles from './Spinner.module.css'
import gifLoader from '../../common/Spin1s-200px.gif'

const Spinner = () => {
    return(
        <div className={styles.wrapper}>
            <img src={gifLoader} alt="loading" className={styles.preloader}></img>
            <div className={styles.preloaderText}>
                Getting books...
            </div>
        </div>
    )
}

export default Spinner;
