import React from "react";

import styles from './Cart.module.css';
import { connect } from "react-redux";

const Cart = ({items, total, onIncrease, onDecrease, onDelete}) => {

    const itemsList = items.map((item, idx) => {

        const {id, title, count, total} = item

        return (
            <li key={id} className={styles.cart}>
                <span className={styles.number}>{idx + 1}</span>
                <span className={styles.title}>{title}</span>
                <span className={styles.quantity}>{count}</span>
                <span className={styles.button1}><button onClick={() => onIncrease(id)}>+</button></span>
                <span className={styles.button2}><button onClick={() => onDecrease(id)}>-</button></span>
                <span className={styles.remove}><button onClick={() => onDelete(id)}>Delete</button></span>
                <span className={styles.price}>{`${total}$`}</span>
            </li>
        )
    })

    return(
        <>
        <ul >
            {itemsList}
        </ul>
        <div>{total}</div>
        </>
    )
}

const mapStateToProps = ({cartItems, orderTotal}) => {
    return {
        items: cartItems,
        total: orderTotal
    } 
    
}

const mapDispatchToProps = () => {
    return {
        onIncrease: (id) => {
            console.log(`INC ${id}`)
        },
        onDecrease: (id) => {
            console.log(`DEC ${id}`)
        },
        onDelete: (id) => {
            console.log(`DEL ${id}`)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);