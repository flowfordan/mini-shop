import React from "react";
import { bookAddedToCart, bookRemovedfromCart } from "../../actions/actions";

import styles from './Cart.module.css';
import { connect } from "react-redux";

const Cart = ({items, total, onDecrease, onDelete, onAddedToCart, onRemovedfromCart}) => {

    const itemsList = items.map((item, idx) => {

        const {id, title, count, total, price} = item

        return (
            <li key={id} className={styles.cart}>
                <span className={styles.number}>{idx + 1}</span>
                <span className={styles.title}>{title}</span>
                <span className={styles.price}>{`${price}$`}</span>
                <span className={styles.quantity}>{count}</span>
                <span className={styles.button1}><button onClick={() => onAddedToCart(id)}>+</button></span>
                <span className={styles.button2}><button onClick={() => onRemovedfromCart(id, 'dec')}>-</button></span>
                <span className={styles.remove}><button onClick={() => onRemovedfromCart(id, 'del')}>Delete</button></span>
                <span className={styles.total}>{`${total}$`}</span>
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

const mapDispatchToProps = (dispatch) => {
    return {

        onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
        onDecrease: (id) => {
            console.log(`DEC ${id}`)
        },
        onRemovedfromCart: (id, type) => dispatch(bookRemovedfromCart(id, type)),
        onDelete: (id) => {
            console.log(`DEL ${id}`)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);