import React, { useContext } from 'react'
import './BookItem.css'
import BookPlaceholder from '../../images/book.png'
import { GlobalContext } from '../../context/GlobalState'

const styles = {
    deleteButton: {
        height: '1.2rem',
        border: 'none',
        padding: '0 .5rem 0 0',
        fontWeight: '500',
        fontSize: '1rem',
        background: 'transparent',
        color: '#8a817c',
        
    },
}

function BookItem({ book }) {
    const {deleteBook} = useContext(GlobalContext)

    const coverSrc = `http://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    return (
        <article className="cardContainer">
            <div className="card">
                <div className="coverContainer">
                    {book.cover_i
                        ? <img src={coverSrc} alt='book cover' className="coverImage" />
                        : <img src={BookPlaceholder} alt='cover not available' className="coverImage" />
                    }
                </div>
                    
                <section className="bookInfo">
                    <h2 className="title">{book.title}</h2>
                    {book.author_name &&
                        <h4 className="author">by {book.author_name}</h4>
                    }
                    {book.isbn && 
                        <p className="identifiers">ISBN: {book.isbn}</p>
                    }
                </section>
            </div>
            <button style={styles.deleteButton} onClick={() => deleteBook(book.id)}>x</button>
        </article>
    )
}

export default BookItem