import React from "react";
import BookList from "../BookList/BookList";

const HomePage = () => {

    const books = [{
        id: 1,
        title: 'V chem moya vera',
        author: 'L.N. Tolstoy'},
        {id: 2,
        title: 'Atomic Habits',
        author: 'J. Clear'}
];

    return(
        <div>
            <BookList books={books}/>
        </div>
    )
}

export default HomePage;