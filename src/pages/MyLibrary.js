import React from 'react'
import { Container } from 'react-bootstrap'
import BookItem from '../components/Book/BookItem'
import './MyLibrary.css'

const styles = {

    instruction: {
        textAlign: 'center',
        margin: '4rem'
    }
}

function MyLibrary ({ savedBooks, updateSavedBooks }) {
    console.log(savedBooks)
    const isInLibrary = true
    const deleteBook = key => {
        const removed = savedBooks.splice(key, 1)
        updateSavedBooks([...savedBooks])
        console.log(removed)
    }
    return (savedBooks.length === 0) ? (<h5 style={styles.instruction}>Search for books to add to your library</h5>) : (
        <Container className="libraryContainer">    
            {savedBooks.map((book, i) => (
                <BookItem key={i} isInLibrary={isInLibrary} book={book} deleteBook={() => deleteBook(i)} />
            ))}
        </Container>
    )
}
export default MyLibrary