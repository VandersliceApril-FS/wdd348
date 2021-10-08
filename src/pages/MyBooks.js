import React from 'react'
import BookItem from '../components/BookItem'

function MyBooks({ savedBooks }) {
    return (savedBooks == null) ? (<p>search for books to add to your library</p>) : (
        <div>
           {savedBooks.map(savedBook => (
               <BookItem key={savedBook.isbn} book={savedBook} />
           ))} 
        </div>
    )
}

export default MyBooks
