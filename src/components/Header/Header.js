import React from "react";
import styles from './Header.module.css'

const Header = () => {
    
    

    return(
        <header className={styles.header}>
            <span className={styles.logo}>Header-logo</span>
            <span className={styles.cartInfo}>Cart-info</span>
        </header>
    )
}

export default Header;