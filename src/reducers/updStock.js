const saveBooks = (prevBooks, newBooks) => {
    //[{id}{}]
    //[{id}{}]


}


export const updStock = (state, action) => {
    if(state === undefined){
        return {
            books: [],
            savedBooks: [],
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
            console.log('STATE',state)
            return {
                books: action.payload[0],
                savedBooks: action.payload[0],
                isLoading: false,
                error: null,
                totalBooksCount: action.payload[1],
                itemsPerPage: action.payload[2]
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