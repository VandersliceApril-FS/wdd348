import React, { useContext } from 'react'
import './BookItem.css'
import { Card } from 'react-bootstrap'
import BookPlaceholder from '../../images/book.png'
import { GlobalContext } from '../../context/GlobalState'
import { FaTrash } from 'react-icons/fa'

const styles = {
    card: {
        width: '100%',
        height: 'fit-content',
        marginBottom: '1rem',
        display: 'flex',

    },
    title: {
        fontWeight: '700',
        fontSize: '1rem',
        // margin: '.5rem 0 0 0'
    },
    placeholderImage: {
        // padding: '0 2rem',
        // width: '100%',
        // display: 'block',
        // margin: 'auto',
    },
    author: {
        fontWeight: '300',
        fontSize: '.75rem',
        margin: '0'
    },
    first_publish_year: {
        fontSize: '.75rem',
        fontWeigth: '200'
    },
    icon: {
        color: 'green',
        marginRight: '.5rem'
    },
    deleteButton: {
        background: 'transparent',
        color: 'red',
        border: 'none',
    },
    coverImage: {
        height: '6rem'
        // width: '10rem'
        // display: 'block',
        // margin: '0 auto'
    },
    info: {
        padding: '0 .5rem',
        width: '100%'
        
    }
}

function BookItem({ book }) {
    const {deleteBook} = useContext(GlobalContext)

    const coverSrc = `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    return (
        <div style={styles.card}>
            <section>
                {book.cover_i
                    ? <img src={coverSrc} alt='book cover' style={styles.coverImage} />
                    : <img src={BookPlaceholder} alt='cover not available' style={styles.placeholderImage} />
                }
            </section>
            <section style={styles.info}>
                <h2 style={styles.title} className="title">{book.title}</h2>
                {book.author_name &&
                    <h4 style={styles.author}>by {book.author_name}</h4>
                }
                <p style={styles.first_publish_year}>Publish Year: {book.first_publish_year} </p>
            
            </section>
            <button style={styles.deleteButton} onClick={() => deleteBook(book.id)}>
                    <FaTrash />
            </button>
            
        </div>
    )
}

export default BookItem