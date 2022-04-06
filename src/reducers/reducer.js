

const initState = {
    books: [],
    isLoading: true,
    error: null
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
                books: action.payload,
                isLoading: false,
                error: null
            }

        case 'FETCH_BOOKS_FAILURE':
            return {
                books: [],
                isLoading: false,
                error: action.payload
            }

        default:
            return state
    }
    
}

export default reducer