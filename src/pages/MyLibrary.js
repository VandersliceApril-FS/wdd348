import React from 'react'
import BookItem from '../components/Book/BookItem'
const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '1rem'
    },
}

function MyLibrary ({ savedBooks, updateSavedBooks }) {
    console.log(savedBooks)
    const isInLibrary = true
    const deleteBook = key => {
        const removed = savedBooks.splice(key, 1)
        updateSavedBooks([...savedBooks])
        console.log(removed)
    }

    return (savedBooks.length === 0) ? (<p>Search for books to add to your library</p>) : (
        <section style={styles.container}>    
            {savedBooks.map((book, i) => (
                <BookItem key={i} isInLibrary={isInLibrary} book={book} deleteBook={() => deleteBook(i)} />
            ))}
        </section>
    )
}
export default MyLibrary