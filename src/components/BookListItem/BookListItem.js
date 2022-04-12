import React from "react";
import styles from './BookListItem.module.css'

const BookListItem = ({book, onAddedToCart}) => {
    
    const {title, author, price, coverImage, about} = book

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

            <div className={styles.about}>{about}</div>

            <div className={styles.price}>{`${price}$`}</div>

            <div className={styles.addBtn}>
                <button onClick={onAddedToCart}>Add to cart</button>    
            </div>
        </div>
    )
}

export default BookListItem;
