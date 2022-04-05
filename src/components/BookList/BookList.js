import React, { useEffect } from "react";
import BookListItem from "../BookListItem/BookListItem";
import styles from './BookList.module.css';
import { connect } from "react-redux";
import withBookstoreService from "../HOC/withBookstoreService";
import { booksLoaded, booksRequested, booksError } from "../../actions/actions";
import { bindActionCreators } from "redux";
import compose from "../../utils/compose";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";


const BookList = (props) => {
    

    useEffect(
        () => {
          const {
            bookstoreService, 
            booksLoaded, 
            booksRequested, 
            booksError} = props;
          booksRequested()
          bookstoreService.getBooks()
          .then((data) => {
              booksLoaded(data)
          })
          .catch((err) => booksError(err));
        },
        [])


    const {books, isLoading, error} = props
    if(isLoading){
        return <Spinner />
    }

    if(error){
        return <ErrorIndicator />
    }

    return(
        <>
        <ul>
            {
                books.map((book) => {
                    return (
                        <li key={book.id}><BookListItem book={book}/></li>
                    )
                })
            }
        </ul>
        </>
    )
}

const mapStateToProps = ({books, isLoading, error}) => {
    return {
        books: books,
        isLoading: isLoading,
        error: error
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        booksLoaded, booksRequested, booksError
    }, dispatch)
}


export default compose (
    withBookstoreService(),
    connect (mapStateToProps, mapDispatchToProps)
)(BookList)
;
