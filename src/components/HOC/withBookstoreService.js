import React from "react";
import { BookstoreServiceConsumer } from "../BookstoreServiceContext/BooksServiceContext";
import bookstoreService from "../../services/bookStoreService";

const withBookstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookstoreServiceConsumer>
                {
                    (bookstoreService) => {
                        return (
                            <Wrapped {...props} bookstoreService={bookstoreService}/>
                        )
                    }
                }
            </BookstoreServiceConsumer>
        )
    }
};

export default withBookstoreService;
