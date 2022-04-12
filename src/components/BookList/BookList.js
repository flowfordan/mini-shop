import { checkPropTypes } from "prop-types";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import BookListItem from "../BookListItem/BookListItem";
import Spinner from "../Spinner/Spinner";
import styles from './BookList.module.css';


const BookList = ({books, onAddedToCart, totalBooksCount, pageChange, itemsPerPage, isLoading, currentPage}) => {

    let pagesCount
    let pagesCountArray

    if(!totalBooksCount){
        pagesCount = 0
        pagesCountArray = []
    }else {
        pagesCount = Math.ceil(totalBooksCount/itemsPerPage)
        pagesCountArray = Array(pagesCount).fill(1).map((x, y) => x + y)
    }
    

    const onPageChange = (num) => {
        if(num<1){
            return
        }
        pageChange(num)
    };

    const pagesLinks = pagesCountArray.map((num) => {
        return(
            <span key={num}>
                <NavLink to={`/page/${num}`} className={({ isActive })  => isActive ? styles.pageNumActive : styles.pageNum} onClick={() => onPageChange(num)}>
                    {num}
                </NavLink>    
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

    const paginator = (
        <>
            <span className={styles.pageNum}>
                        <Link to={`/page/${currentPage - 1}`} onClick={() => onPageChange(currentPage - 1)}>
                            {`<`}
                        </Link>  
                    </span>

                    {pagesLinks}

                    <span className={styles.pageNum}>
                        <Link to={`/page/${currentPage + 1}`} onClick={() => onPageChange(currentPage + 1)}>
                            {`>`}
                        </Link>
                    </span>
        </>
    )



    const spinnerLoader = isLoading? <Spinner /> : null;
    const dataLoaded = isLoading? null : <ul>{itemsToRender}</ul>;

    return(
        <>
            <div className={styles.listHeader}>
                <span className={styles.title}>Books</span>
                <span className={styles.pages}>
                    {paginator}
                </span>
            </div>

            {spinnerLoader}
            {dataLoaded}           

            <div className={styles.listFooter}>
                <span className={styles.pages}>
                    {paginator}
                </span>
            </div>
        </>
    )
}

export default BookList;
