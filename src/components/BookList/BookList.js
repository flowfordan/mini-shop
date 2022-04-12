import React from "react";
import { NavLink, Link } from "react-router-dom";
import BookListItem from "../BookListItem/BookListItem";
import styles from './BookList.module.css';


const BookList = ({books, onAddedToCart, totalBooksCount}) => {

    const itemsOnPage = 4;
    const pagesCount = Math.ceil(totalBooksCount/itemsOnPage)
    const pagesCountArray = Array(pagesCount).fill(1).map((x, y) => x + y)



    const pagesLinks = pagesCountArray.map((num) => {
        return(
            <span key={num}>
                <NavLink to={`${num}`} className={({ isActive })  => isActive ? styles.pageNumActive : styles.pageNum}>{num}</NavLink>    
            </span>
        )
    })

    const itemsToRender =  books.map((book) => {
        return (
            <li key={book.id}>
                <BookListItem 
                book={book}
                onAddedToCart={() => onAddedToCart(book.id)}/>
            </li>
        )
    })

    return(
        <>
        <div className={styles.listHeader}>
            <span className={styles.title}>Books</span>
            <span className={styles.pages}>{pagesLinks}</span>
        </div>
            <ul>
                {itemsToRender}
            </ul>
            <div className={styles.listFooter}>
            
            <span className={styles.pages}>{pagesLinks}</span>
        </div>
        </>
    )
}

export default BookList;
