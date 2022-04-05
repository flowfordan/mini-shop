import React, { useEffect } from "react";
import BookListItem from "../BookListItem/BookListItem";
import styles from './BookList.module.css';
import { connect } from "react-redux";
import withBookstoreService from "../HOC/withBookstoreService";
import { booksLoaded } from "../../actions/actions";
import { bindActionCreators } from "redux";
import compose from "../../utils/compose";
import Spinner from "../Spinner/Spinner";

const BookList = (props) => {
    

    useEffect(
        () => {
          const {bookstoreService, booksLoaded} = props;
          bookstoreService.getBooks().then((data) => {
              booksLoaded(data)
          });
          

          // dispatch action
          
        },
        [])


    const {books, isLoading} = props
    if(isLoading){
        return <Spinner />
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

const mapStateToProps = (state) => {
    return {
        books: state.books,
        isLoading: state.isLoading
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        booksLoaded
    }, dispatch)
}


export default compose (
    withBookstoreService(),
    connect (mapStateToProps, mapDispatchToProps)
)(BookList)
;
