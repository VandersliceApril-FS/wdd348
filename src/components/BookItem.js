import React from 'react'

function BookItem({ book }) {
const coverSrc = `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`

    return (
        <div>
            <img src={coverSrc} alt='book cover' />
            <ul>
                <li><strong>Title: </strong> {book.title}</li>
                <li><strong>Subtitle: </strong> {book.subtitle}</li>
                <li>Author: {book.author_name}</li>
                <li>key:{book.cover_i}</li>
            </ul>
        </div>
    )
}

export default BookItem
