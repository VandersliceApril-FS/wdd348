import React, { useState, useEffect } from 'react'
import BookItem from './BookItem'

function SearchResults({ isLoading, books, getBookToAdd}) {
    const [bookToAdd, setBookToAdd] = useState('')

    useEffect(() => {
        getBookToAdd(bookToAdd)

    }, [bookToAdd])

    return isLoading ? (<h1>Loading...</h1>) : (
        <div>
            {books.map(book => (
                <BookItem key={book._version_} book={book} addBook={e => setBookToAdd(e)}></BookItem>
            ))}
        </div>
    )
}

export default SearchResults
