import React from 'react'
import { Container } from 'react-bootstrap'
import BookItem from '../components/Book/BookItem'
const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '1rem',
        margin: '3rem 1rem 0 1rem'
    },
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
        <Container style={styles.container}>    
            {savedBooks.map((book, i) => (
                <BookItem key={i} isInLibrary={isInLibrary} book={book} deleteBook={() => deleteBook(i)} />
            ))}
        </Container>
    )
}
export default MyLibrary