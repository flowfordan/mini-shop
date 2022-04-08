

const initState = {
    books: [],
    isLoading: true,
    error: null,
    cartItems: [
        {
            id: 1,
            title: 'Privet zemlyak',
            price: 10,
            count: 2,
            total: 20
        },
        {
            id: 2,
            title: 'Nezemlyak',
            price: 15,
            count: 3,
            total: 45,
        }
    ],
    orderTotal: 65
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

            const bookId = action.payload;

            const idx = state.cartItems.findIndex(i => i.id === bookId);

            if(idx > -1){
                const cart = [...state.cartItems];
                const item = cart[idx]
                const newItem = {...item, count: item.count + 1, total: item.total + item.price}
                cart[idx] = newItem;

                const newOrderTotal = state.orderTotal + item.price

                return {
                    ...state,
                    isLoading: false,
                    error: null,
                    cartItems: cart,
                    orderTotal: newOrderTotal
                }
                
            }
            else {
                const bookToAdd = state.books.find(i => i.id === bookId)
                const {id, title, price} = bookToAdd
                const newItem = {id, title, price, count: 1, total: price}
                const cart = [...state.cartItems, newItem];

                const newOrderTotal = state.orderTotal + price

                return {
                    ...state,
                    isLoading: false,
                    error: null,
                    cartItems: cart,
                    orderTotal: newOrderTotal
                }
            }
            
        case 'BOOK_REMOVED_FROM_CART':
            const book = action.payload[0];
            const type = action.payload[1];
            
            const idxR = state.cartItems.findIndex(i => i.id === book);
            const currentCount = state.cartItems[idxR].count;
            
            let initCart = [...state.cartItems]
            let newCart = initCart
            let newOrderTotal
            const item = initCart[idxR]
            
            if(type === 'del' || currentCount === 1){
                //delete from cart
                newCart = [
                    ...initCart.slice(0, idxR),
                    ...initCart.slice(idxR + 1)]

                newOrderTotal = state.orderTotal - item.total
            } else {
                //change count and total
                
                const updItem = {...item, count: item.count - 1, total: item.total - item.price}
                newCart[idxR] = updItem
                newOrderTotal = state.orderTotal - item.price
            }

            

            console.log('removed', type)
            return {
                ...state,
                isLoading: false,
                error: null,
                cartItems: newCart,
                orderTotal: newOrderTotal
            }

        default:
            return state
    }
    
}

export default reducer