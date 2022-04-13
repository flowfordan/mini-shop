import React from "react";
import styles from './Header.module.css';
import { NavLink, Link, Route, Routes } from "react-router-dom";

const Header = () => {
    
    

    return(
        <header className={styles.header}>

            <NavLink to="/page/1"> 
                
                <span className={styles.logo}>

                miniStore
            
            </span>
            </NavLink>
            
           

            <span className={styles.cartInfo}>Cart-info</span>

        </header>
    )
}

export default Header;