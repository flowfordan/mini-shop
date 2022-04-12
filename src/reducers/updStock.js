export const updStock = (state, action) => {
    if(state === undefined){
        return {
            books: [],
            isLoading: true,
            error: null,
        }
    }

    switch(action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                books: [],
                isLoading: true,
                error: null
            }

        case 'FETCH_BOOKS_SUCCESS':
            return {
                books: action.payload[0],
                isLoading: false,
                error: null,
                totalBooksCount: action.payload[1]
            }

        case 'FETCH_BOOKS_FAILURE':
            return {
                books: [],
                isLoading: false,
                error: action.payload
            }

        default:
            return state.stock
    }
};