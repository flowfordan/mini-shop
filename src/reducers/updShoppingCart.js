const updCartItems = (cartItems, item, idx) => {

    if (item.count === 0){
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }

    if(idx === -1){
        return [
            ...cartItems,
            item
        ]
    }
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
};

const updCartItem = (book, cartItem, quantity) => {
    
    if(cartItem){
        return {
            ...cartItem, 
            count: cartItem.count + quantity, 
            total: cartItem.total + quantity*cartItem.price} 
    }
    else {
        const {id, title, price} = book
        return {id, title, price, count: 1, total: price}
    }
};

const updateOrder = (state, bookId, quantity) => {

    const {stock: {books}, shoppingCart: {cartItems, orderTotal}} = state;
    const book = books.find(i => i.id === bookId)
    const idx = cartItems.findIndex(i => i.id === bookId);
    const cartItem = cartItems[idx];
    const newItem = updCartItem(book, cartItem, quantity)

    return {
        cartItems: updCartItems(cartItems, newItem, idx),
        orderTotal: orderTotal + quantity*newItem.price
    }
};

export const updShoppingCart = (state, action) => {

    if(state === undefined){
        return {
            cartItems: [],
            orderTotal: 0
        }
    }


    switch(action.type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1)
            
        case 'BOOK_REMOVED_FROM_CART':
            const type = action.payload[1];
                if(type === 'del'){
                    const item = state.shoppingCart.cartItems.find(i => i.id === action.payload[0])
                    return updateOrder(state, action.payload[0], -item.count)
                }
            return updateOrder(state, action.payload[0], -1)

        default:
            return state.shoppingCart
    }
};
