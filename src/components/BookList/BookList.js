import React from "react";
import { NavLink, Link, Route, Routes } from "react-router-dom";
import BookListItem from "../BookListItem/BookListItem";
import Spinner from "../Spinner/Spinner";
import styles from './BookList.module.css';


const BookList = ({books, onAddedToCart, totalBooksCount, itemsPerPage, isLoading, currentPage}) => {

    let pagesCount
    let pagesCountArray

    // const [booksCount, setCount] = setCount(0)

    if(!totalBooksCount){
        pagesCount = 0
        pagesCountArray = []
    }else {
        pagesCount = Math.ceil(totalBooksCount/itemsPerPage)
        pagesCountArray = Array(pagesCount).fill(1).map((x, y) => x + y);
        if(pagesCountArray.length > 5){
            switch (currentPage) {
                case 1:
                    pagesCountArray = [currentPage, currentPage + 1];
                    break
                case pagesCount:
                    pagesCountArray = [currentPage - 1, currentPage]
                    break
                default:
                    pagesCountArray = [currentPage - 1, currentPage, currentPage + 1]
            }
            
        }
    }
    

    const pagesLinks = pagesCountArray.map((num) => {
        return(
            <span key={num}>
                <NavLink to={`/page/${num}`} className={({ isActive })  => isActive ? styles.pageNumActive : styles.pageNum} >
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
                        <Link to={`/page/${currentPage - 1}`}>
                        {currentPage === 1? '' : `<`}
                        </Link>  
                    </span>

                    {pagesLinks}

                    <span className={styles.pageNum}>
                        <Link to={`/page/${currentPage + 1}`}>
                            {currentPage === pagesCount? '' : `>`}
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
