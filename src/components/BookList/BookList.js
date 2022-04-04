import React, { useEffect } from "react";
import BookListItem from "../BookListItem/BookListItem";
import styles from './BookList.module.css';
import { connect } from "react-redux";
import withBookstoreService from "../HOC/withBookstoreService";
import { booksLoaded } from "../../actions/actions";
import { bindActionCreators } from "redux";
import compose from "../../utils/compose";

const BookList = (props) => {
    

    useEffect(
        () => {
          // get data
          const {bookstoreService} = props;
          const data = bookstoreService.getBooks();
          console.log(data)

          // dispatch action
          props.booksLoaded(data)
        },
        [])

    const {books} = props

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
        books: state.books
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
