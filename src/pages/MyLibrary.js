import React from 'react'
import BookItem from '../components/Book/BookItem'

// static book item used to style the cards
const tempBook = {
    title: 'On Writing Well',
    subtitle: 'an informal guide to writing non-fiction',
    author_name: ['William Zinsser'],
    isbn: ['060914793'],
    first_publish_year: '1976',
    _version_: '1700712174657208328',
    cover_i: '20450'
}

// count the number of books in the library, place books in a row/column, after every 4th book in a row move to the next

const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '1rem'
    },
}

function MyLibrary ({ savedBooks, updateSavedBooks }) {
    const isInLibrary = true
    const deleteBook = key => {
        const removed = savedBooks.splice(key, 1)
        updateSavedBooks([...savedBooks])
        console.log(removed)
    }

    return (savedBooks == null) ? (<p>search for books to add to your library</p>) : (
        <section style={styles.container}>    
            {savedBooks.map((book, i) => (
                
                <BookItem key={i} isInLibrary={isInLibrary} book={book} deleteBook={() => deleteBook(i)} />
                
                
            ))}
            <BookItem isInLibrary={isInLibrary} book={tempBook} />
            <BookItem isInLibrary={isInLibrary} book={tempBook} />

        </section>
    )
}
export default MyLibrary