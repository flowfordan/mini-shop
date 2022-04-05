

const initState = {
    books: [],
    isLoading: true,
    error: null
};

const reducer = (state = initState, action) => {

    switch(action.type) {

        case 'BOOKS_REQUESTED':
            return {
                ...state,
                isLoading: true,
                error: null
            }

        case 'BOOKS_LOADED':
            return {
                books: action.payload,
                isLoading: false,
                error: null
            }

        case 'BOOKS_ERROR':
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