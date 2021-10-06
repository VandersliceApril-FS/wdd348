import React from 'react'
import BookItem from './BookItem'

function BookList({ isLoading, books }) {
    return isLoading ? (<h1>Loading...</h1>) : (
        <div>
            {books.map(book => (
                <BookItem key={book.cover_i} book={book}></BookItem>
            ))}
        </div>
    )
}

export default BookList
