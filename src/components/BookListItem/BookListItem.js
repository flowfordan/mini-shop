import React from "react";
import styles from './BookListItem.module.css'

const BookListItem = ({book}) => {
    
    const {title, author} = book

    return(
        <>
        <span>
            {title}
        </span>
        <span>
            {author}
        </span>
        </>
    )
}

export default BookListItem;
