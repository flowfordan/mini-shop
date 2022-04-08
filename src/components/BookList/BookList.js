import React from "react";
import BookListItem from "../BookListItem/BookListItem";
import styles from './BookList.module.css';


const BookList = ({books, onAddedToCart}) => {
    return(
        <>
        <ul>
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem 
                            book={book}
                            onAddedToCart={() => onAddedToCart(book.id)}/>
                        </li>
                    )
                })
            }
        </ul>
        </>
    )
}

export default BookList;
