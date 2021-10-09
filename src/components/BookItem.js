import React from 'react'

function BookItem({ key, book, setNewBook, savedBooks }) {
    const coverSrc = `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    
    const onClick = () => {
        setNewBook([...savedBooks, book])
    }
    
    return (
        <div>
            {book.cover_i &&
                <img src={coverSrc} alt='book cover' />
            }
            <ul>
                <li><strong>Title: </strong> {book.title}</li>
                {book.subtitle && 
                    <li><strong>Subtitle: </strong> {book.subtitle}</li>
                }
                {book.author_name &&
                    <li>Author: {book.author_name[0]}</li>
                }
                {book.isbn && 
                    <li>ISBN: {book.isbn[0]}</li>
                }
                <li>Publish Year:{book.first_publish_year} </li>
                <li>Version: {book._version_}</li>
            </ul>
            <button onClick={book => onClick(book)}>Add</button>
        </div>
    )
}

export default BookItem
