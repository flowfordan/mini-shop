import React from "react";
import { bookAddedToCart, bookRemovedfromCart } from "../../actions/actions";

import styles from './Cart.module.css';
import { connect } from "react-redux";

const Cart = ({items, total, onAddedToCart, onRemovedfromCart}) => {

    const itemsList = items.map((item, idx) => {

        const {id, title, count, total, price} = item

        return (

            <tr key={id} className={styles.booksRow}>
                <td className={styles.number}>{idx + 1}</td>
                <td>{title}</td>
                <td>{`${price}$`}</td>

                <td className={styles.quant}>
                    <button onClick={() => onRemovedfromCart(id, 'dec')}>-</button>
                    {count}
                    <button onClick={() => onAddedToCart(id)}>+</button>
                </td>

                <td><button onClick={() => onRemovedfromCart(id, 'del')}>Del</button></td>
                <td>{`${total}$`}</td>
            </tr>

        )
    })


    const emptyCart = (<div className={styles.dummy}>Cart is empty</div>)

    const filledCart = 
         (<>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.head}>
                        <th>N</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quant.</th>
                        <th></th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsList}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className={styles.total}>{`${total}$`}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className={styles.checkout}><button >Checkout</button></td>
                    </tr>
                </tbody>
            </table>
            
            
            </>
        )
    
    

    const renderedCart = total === 0? emptyCart : filledCart;



    return(
        <div className={styles.cart}>
            <div className={styles.title}>Cart</div>
            {renderedCart}
        </div>
    )
}

const mapStateToProps = ( {shoppingCart:{cartItems, orderTotal}}) => {
    return {
        items: cartItems,
        total: orderTotal
    } 
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
        onRemovedfromCart: (id, type) => dispatch(bookRemovedfromCart(id, type)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);