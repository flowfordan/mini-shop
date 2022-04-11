

const initState = {
    books: [],
    isLoading: true,
    error: null,
    cartItems: [

    ],
    orderTotal: 0
};

const updCartItems = (cartItems, item, idx) => {
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
}


const updCartItem = (book, cartItem) => {
    
    if(cartItem){
        return {
            ...cartItem, 
            count: cartItem.count + 1, 
            total: cartItem.total + cartItem.price} 
    }
    else {
        const {id, title, price} = book
        return {id, title, price, count: 1, total: price}
    }

}


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

            const bookId = action.payload;
            const bookToAdd = state.books.find(i => i.id === bookId)
            const idx = state.cartItems.findIndex(i => i.id === bookId);
            const cartItem = state.cartItems[idx]
            let newItem;

            newItem = updCartItem(bookToAdd, cartItem)

            return {
                ...state,
                isLoading: false,
                error: null,
                cartItems: updCartItems(state.cartItems, newItem, idx),
                orderTotal: state.orderTotal + bookToAdd.price
            }
            
        case 'BOOK_REMOVED_FROM_CART':
            const book = action.payload[0];
            const type = action.payload[1];
            
            const idxR = state.cartItems.findIndex(i => i.id === book);
            const currentCount = state.cartItems[idxR].count;
            
            let initCart = [...state.cartItems]
            let newCart = initCart
            let decOrderTotal
            const item = initCart[idxR]
            
            if(type === 'del' || currentCount === 1){
                //delete from cart
                newCart = [
                    ...initCart.slice(0, idxR),
                    ...initCart.slice(idxR + 1)];
                decOrderTotal = state.orderTotal - item.total;
            } else {
                //change count and total
                const updItem = {...item, count: item.count - 1, total: item.total - item.price};
                newCart[idxR] = updItem;
                decOrderTotal = state.orderTotal - item.price;
            }

            return {
                ...state,
                isLoading: false,
                error: null,
                cartItems: newCart,
                orderTotal: decOrderTotal
            }

        default:
            return state
    }
    
}

export default reducer