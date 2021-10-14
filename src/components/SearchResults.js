import React from 'react'
import BookItem from './Book/BookItem'

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
}


function SearchResults({ isLoading, books, setNewBook, savedBooks}) {
    return isLoading ? (<h1>Loading...</h1>) : (
        <section style={styles.container}>
            {books.map(book => (
                <BookItem savedBooks={savedBooks} key={book._version_} book={book} setNewBook={setNewBook}></BookItem>
            ))}
        </section>
    )
}

export default SearchResults
