import React from "react";
import styles from './BookListItem.module.css'

const BookListItem = ({book}) => {
    
    const {title, author, price, coverImage} = book

    return(
        <div className={styles.book}>
            <div className={styles.cover}>
                {/* center img and make blur background */}
                <img alt= 'cover' src={coverImage}/>
            </div>

            <div className={styles.title}>
                {title}
            </div>

            <div className={styles.author}>
                {author}
            </div>

            <div className={styles.discript}>About</div>

            <div className={styles.price}>{`${price}$`}</div>

            <div className={styles.addBtn}>
                <button>Add to cart</button>    
            </div>
        </div>
    )
}

export default BookListItem;
