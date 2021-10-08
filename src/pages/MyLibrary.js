import React from 'react'
import BookItem from '../components/BookItem'

function MyLibrary ({ bookList }) {
// from Search Results, grab the book title and isbn and put it here

    return (bookList == null) ? (<p>search for books to add to your library</p>) : (
        <div>
        {bookList.map(book => (
            <BookItem key={book.isbn} book={book} />
        ))} 
        </div>
    )
}
export default MyLibrary