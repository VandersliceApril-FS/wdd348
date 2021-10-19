import React, { useContext } from 'react'
import './BookItem.css'
import BookPlaceholder from '../../images/book.png'
import Image from 'react-bootstrap/Image'
import { Card, Container } from 'react-bootstrap'
import { GlobalContext } from '../../context/GlobalState'

const styles = {
    coverImage: {
        height: '100%',
        display: 'block',
        margin: 'auto'
    },
    placeholderImage: {
        padding: '0 2rem',
        height: '100%',
        display: 'block',
        margin: 'auto',
    },
    author: {
        fontWeight: '300',
        fontSize: '1rem',
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
    }
}

function BookItem({ book }) {
    const {deleteBook} = useContext(GlobalContext)

    const coverSrc = `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    return (
        <Card style={{ width: '18rem', height: '25rem', padding: '1rem 0 .5rem 0', margin: '0 0 1rem 0' }}>
            <Container style={{ height: '15rem' }}>
                {book.cover_i
                    ? <Image src={coverSrc} alt='book cover' style={styles.coverImage} fluid />
                    : <Image src={BookPlaceholder} alt='cover image not available' style={styles.placeholderImage} fluid />
                }
            </Container>
            <Card.Body>
                <h2 className="title">{book.title}</h2>
                {book.author_name &&
                    <h4 style={styles.author}>by {book.author_name}</h4>
                }
                <p style={styles.first_publish_year}>Publish Year: {book.first_publish_year} </p>
            </Card.Body>
            <button style={styles.deleteButton} onClick={() => deleteBook(book.id)}>
                    Delete
            </button>
        </Card>
    )
}

export default BookItem