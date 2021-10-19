import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import BookItem from './Book/BookItem'

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
}

function SearchResults({ isLoading, books, updateSavedBooks, savedBooks}) {
    return isLoading ? (<h1>Loading...</h1>) : (
        <section style={styles.container}>
            {books.map(book => (
                <BookItem savedBooks={savedBooks} key={book._version_} book={book} updateSavedBooks={updateSavedBooks} ></BookItem>
            ))}
        </section>
    )
}

export default SearchResults
