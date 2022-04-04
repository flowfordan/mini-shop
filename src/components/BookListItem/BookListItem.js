import React from "react";
import styles from './BookListItem.module.css'

const BookListItem = ({book}) => {
    
    const {title, author} = book

    return(
        <div className={styles.book}>
            <div className={styles.cover}>Cover</div>

            <div className={styles.title}>
                {title}
            </div>

            <div className={styles.author}>
                {author}
            </div>

            <div className={styles.discript}>About</div>

            <div className={styles.price}>45$</div>

            <div className={styles.addBtn}>
                <button>Add to cart</button>    
            </div>
        </div>
    )
}

export default BookListItem;
