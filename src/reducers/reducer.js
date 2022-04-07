

const initState = {
    books: [],
    isLoading: true,
    error: null,
    cartItems: [
        {
            id: 1,
            title: 'Privet zemlyak',
            count: 2,
            total: 100
        },
        {
            id: 2,
            title: 'Nezemlyak',
            count: 3,
            total: 280
        }
    ],
    orderTotal: 380
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

        default:
            return state
    }
    
}

export default reducer