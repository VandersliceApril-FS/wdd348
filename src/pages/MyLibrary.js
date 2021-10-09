import React from 'react'
import BookItem from '../components/BookItem'

function MyLibrary ({ savedBooks }) {
    return (savedBooks == null) ? (<p>search for books to add to your library</p>) : (
        <div>
        {savedBooks.map(book => (
            <BookItem key={book._version_} book={book} />
        ))} 
        </div>
    )
}
export default MyLibrary