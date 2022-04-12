import React, { useEffect } from "react";
import { connect } from "react-redux";
import withBookstoreService from "../HOC/withBookstoreService";
import { fetchBooks, bookAddedToCart } from "../../actions/actions";
import compose from "../../utils/compose";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import BookList from './BookList'


const BookListContainer = (props) => {
    
    console.log(props)

    useEffect(
        () => props.fetchBooks(),
    [])

    const {books, isLoading, error, onAddedToCart, totalBooksCount} = props;


    if(isLoading){
        return <Spinner />
    }

    if(error){
        return <ErrorIndicator />
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} totalBooksCount={totalBooksCount}/>
    
}

const mapStateToProps = ( {stock: { books, isLoading, error, totalBooksCount}}) => {
    return {
        books: books,
        isLoading: isLoading,
        error: error,
        totalBooksCount: totalBooksCount
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
)(BookListContainer);



