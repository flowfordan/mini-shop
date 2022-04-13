import React from "react";
import styles from './Header.module.css';
import { NavLink, Link, Route, Routes } from "react-router-dom";

const Header = () => {
    
    

    return(
        <header className={styles.header}>

            
                
                <span className={styles.logo}>
                <NavLink to="/page/1"> 
                miniStore
                </NavLink>
                </span>

        </header>
    )
}

export default Header;