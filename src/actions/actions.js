const booksLoaded = ([newBooks, totalBooks]) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: [newBooks, totalBooks]
    }
};

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST',
    }
};

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
};

const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

const bookRemovedfromCart = (bookId, type) => {
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: [bookId, type]
    }
}


const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)))
}


export {
    fetchBooks, bookAddedToCart, bookRemovedfromCart
};