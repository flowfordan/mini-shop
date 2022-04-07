import React from "react";
import BookListContainer from "../BookList/BookListContainer";
import styles from './HomePage.module.css';
import { connect } from "react-redux";
import Cart from "../Cart/Cart";

const HomePage = () => {

    

    return(
        <div className={styles.layout}>
            
            <div className={styles.books}>
                <BookListContainer/>
            </div>
            
            
            <div className={styles.cart}>
                <Cart />
            </div>
        </div>
    )
}

export default HomePage;