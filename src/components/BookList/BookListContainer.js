import React, { useEffect } from "react";
import BookListItem from "../BookListItem/BookListItem";
import styles from './BookList.module.css';
import { connect } from "react-redux";
import withBookstoreService from "../HOC/withBookstoreService";
import { fetchBooks, bookAddedToCart } from "../../actions/actions";
import compose from "../../utils/compose";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";


const BookList = ({books, onAddedToCart}) => {
    return(
        <>
        <ul>
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem 
                            book={book}
                            onAddedToCart={() => onAddedToCart(book.id)}/>
                        </li>
                    )
                })
            }
        </ul>
        </>
    )
} 



const BookListContainer = (props) => {
    

    useEffect(
        () => props.fetchBooks(),
        [])

    const {books, isLoading, error, onAddedToCart} = props;

    if(isLoading){
        return <Spinner />
    }

    if(error){
        return <ErrorIndicator />
    }

    return <BookList books={books} onAddedToCart={onAddedToCart}/>
    
}

const mapStateToProps = ({books, isLoading, error}) => {
    return {
        books: books,
        isLoading: isLoading,
        error: error
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {bookstoreService} = ownProps
    return {
         fetchBooks: fetchBooks(bookstoreService, dispatch),
         onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
}


export default compose (
    withBookstoreService(),
    connect (mapStateToProps, mapDispatchToProps)
)(BookListContainer)
;



