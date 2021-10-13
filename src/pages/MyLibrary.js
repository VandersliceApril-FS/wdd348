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

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
}

function MyLibrary ({ savedBooks }) {
    return (savedBooks == null) ? (<p>search for books to add to your library</p>) : (
        <section style={styles.container}>
        {savedBooks.map(book => (
            <BookItem key={book._version_} book={book} />
        ))}
        <BookItem book={tempBook} />
        <BookItem book={tempBook} />
        </section>
    )
}
export default MyLibrary