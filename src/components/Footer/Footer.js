import React from "react";
import styles from './Footer.module.css'

const Footer = () => {
    
    return(
        <footer className={styles.footer}>
            <span>miniShop, 2022</span>
            <span>created by <a href="https://github.com/flowfordan" target="_blank" rel="noopener noreferrer">flowfordan</a></span>
        </footer>
    )
}

export default Footer;