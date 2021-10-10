import React from 'react'
import BookItem from './Book/BookItem'

function SearchResults({ isLoading, books, setNewBook, savedBooks}) {

    return isLoading ? (<h1>Loading...</h1>) : (
        <div>
            {books.map(book => (
                <BookItem savedBooks={savedBooks} key={book._version_} book={book} setNewBook={setNewBook}></BookItem>
            ))}
        </div>
    )
}

export default SearchResults
