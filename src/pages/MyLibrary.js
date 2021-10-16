import React from 'react'
import { Row, Col } from 'react-bootstrap'
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
    }
}

function MyLibrary ({ savedBooks }) {
    const isInLibrary = true
    return (savedBooks == null) ? (<p>search for books to add to your library</p>) : (
        <section style={styles.container}>    
            {savedBooks.map(book => (
                <BookItem key={book._version_} isInLibrary={isInLibrary} book={book} />
            ))}
            <BookItem isInLibrary={isInLibrary} book={tempBook} />
            <BookItem isInLibrary={isInLibrary} book={tempBook} />
        </section>
    )
}
export default MyLibrary