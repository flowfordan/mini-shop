import React from "react";
import BookListItem from "../BookListItem/BookListItem";
import styles from './BookList.module.css'

const BookList = (props) => {
    


    const {books} = props

    return(
        <>
        <ul>
            {
                books.map((book) => {
                    return (
                        <li key={book.id}><BookListItem book={book}/></li>
                    )
                })
            }
        </ul>
        </>
    )
}

export default BookList;
