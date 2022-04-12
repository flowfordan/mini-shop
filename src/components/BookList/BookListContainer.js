import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import withBookstoreService from "../HOC/withBookstoreService";
import { fetchBooks, bookAddedToCart } from "../../actions/actions";
import compose from "../../utils/compose";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import BookList from './BookList';


const BookListContainer = (props) => {
    
    //state wt current page


    const pageChange = (page) => {
        setPage(page)
    }

    const [currentPage, setPage] = useState(1)

    useEffect(
        () => console.log(currentPage),
        [currentPage])

    useEffect(
        () => props.fetchBooks(currentPage),
    [currentPage])



    const {books, isLoading, error, onAddedToCart, totalBooksCount, itemsPerPage} = props;


    if(isLoading){
        return <Spinner />
    }

    if(error){
        return <ErrorIndicator />
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} 
    totalBooksCount={totalBooksCount} pageChange={pageChange}
    itemsPerPage={itemsPerPage} isLoading={isLoading}/>
    
}

const mapStateToProps = ( {stock: { books, isLoading, error, totalBooksCount, itemsPerPage}}) => {
    return {
        books: books,
        isLoading: isLoading,
        error: error,
        totalBooksCount: totalBooksCount,
        itemsPerPage: itemsPerPage
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {bookstoreService} = ownProps;
    return {
         fetchBooks: fetchBooks(bookstoreService, dispatch),
         onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
}


export default compose (
    withBookstoreService(),
    connect (mapStateToProps, mapDispatchToProps)
)(BookListContainer);



