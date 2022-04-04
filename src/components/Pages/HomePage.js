import React from "react";
import BookList from "../BookList/BookList";
import styles from './HomePage.module.css';
import { connect } from "react-redux";

const HomePage = () => {

    

    return(
        <div className={styles.layout}>
            
            <div className={styles.books}>
            <BookList/>
            </div>
            
            
            <div className={styles.cart}>
                Cart
            </div>
        </div>
    )
}

export default HomePage;