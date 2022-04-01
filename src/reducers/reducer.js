

const initState = {
    books: []
};

const reducer = (state = initState, action) => {

    switch(action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            }

        default:
            return state
    }
    
}

export default reducer