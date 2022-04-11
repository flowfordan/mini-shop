

const initState = {
    books: [],
    isLoading: true,
    error: null,
    cartItems: [

    ],
    orderTotal: 0
};

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

    const {books, cartItems} = state;
    const book = books.find(i => i.id === bookId)
    const idx = cartItems.findIndex(i => i.id === bookId);
    const cartItem = cartItems[idx];
    const newItem = updCartItem(book, cartItem, quantity)

    return {
        ...state,
        cartItems: updCartItems(cartItems, newItem, idx),
        orderTotal: state.orderTotal + quantity*book.price
    }
};


const reducer = (state = initState, action) => {

    switch(action.type) {

        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                isLoading: true,
                error: null
            }

        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                isLoading: false,
                error: null
            }

        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                isLoading: false,
                error: action.payload
            }

        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1)
            
        case 'BOOK_REMOVED_FROM_CART':
            const type = action.payload[1];
                if(type === 'del'){
                    const item = state.cartItems.find(i => i.id === action.payload[0])
                    return updateOrder(state, action.payload[0], -item.count)
                }
            return updateOrder(state, action.payload[0], -1)

        default:
            return state
    }
    
}

export default reducer