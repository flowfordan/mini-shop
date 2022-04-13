import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import withBookstoreService from "../HOC/withBookstoreService";
import { fetchBooks, bookAddedToCart } from "../../actions/actions";
import compose from "../../utils/compose";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import BookList from './BookList';
import { useParams } from "react-router-dom";


const BookListContainer = (props) => {
    
    const {books, isLoading, error, onAddedToCart, totalBooksCount, itemsPerPage} = props;
    
    const {pageNum}  = useParams(); //getting current url for default state
    const page = parseInt(pageNum)
    console.log(page)
    

    const [currentPage, setPage] = useState(page);
    const [gotStatTotal, setStatTotal] = useState(false);
    const [perPageCount, setPerPageCount] = useState(2);
    const [booksCount, setCount] = useState(0);

    //setting current page
    useEffect(
        () => setPage(page),
    [page])

    useEffect(
        () => props.fetchBooks(currentPage),
    [currentPage])

    //if loaded - set true
    useEffect(
        () => {
            if(totalBooksCount){
                setStatTotal(true)
            }
        },
    [totalBooksCount])

    //if true is triggered - set params once and for all  (wont update)
    useEffect(
        () => {
            if(gotStatTotal){
                setCount(totalBooksCount)
            }
        },
    [gotStatTotal])

    useEffect(
        () => {
            if(gotStatTotal){
                setPerPageCount(itemsPerPage)
            }
        },
    [gotStatTotal])


    if(error){
        return <ErrorIndicator />
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} 
    totalBooksCount={booksCount}
    itemsPerPage={perPageCount} isLoading={isLoading}
    currentPage={currentPage}/>
    
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



