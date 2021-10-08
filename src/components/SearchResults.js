import React from 'react'
import BookItem from './BookItem'

function SearchResults({ isLoading, books }) {
    
    return isLoading ? (<h1>Loading...</h1>) : (
        <div>
            {books.map(book => (
                <BookItem key={book._version_} book={book}></BookItem>
            ))}
        </div>
    )
}

export default SearchResults