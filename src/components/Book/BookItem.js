import React, { useState } from 'react'
import { FiCheckSquare } from 'react-icons/fi'
import './BookItem.css'
import BookPlaceholder from '../../images/book.png'
import Image from 'react-bootstrap/Image'
import { Card, Container, Button, Toast } from 'react-bootstrap'

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
        position: 'absolute',
        bottom: '0',
    }
}

function BookItem({book, updateSavedBooks, savedBooks, isInLibrary, deleteBook}) {
    const [show, setShow] = useState(false)
    const coverSrc = `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    const onClick = () => {
        setShow(true)
        updateSavedBooks([...savedBooks, book])
    }

    
    return (
        <Card style={{ width: '18rem', height: '28rem', padding: '1rem 0 .5rem 0', margin: '0 0 1rem 0' }}>
            <Container style={{ height: '15rem'  }}>
                {book.cover_i
                    ? <Image src={coverSrc} alt='book cover' style={styles.coverImage} fluid />
                    : <Image src={BookPlaceholder} alt='cover image not available' style={styles.placeholderImage} fluid />
                }
            </Container>
            <Card.Body>
                <h2 className="title">{book.title}</h2>
                {book.author_name &&
                    <h4 style={styles.author}>by {book.author_name[0]}</h4>
                }
                <p style={styles.first_publish_year}>Publish Year: {book.first_publish_year} </p>
                {isInLibrary
                    ? <button style={styles.deleteButton} onClick={deleteBook}>Delete </button>
                    : <Button onClick={book => onClick(book)}>Add</Button>
                }
            </Card.Body>
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Body>
                    <FiCheckSquare style={styles.icon} />
                    <strong>Book Added</strong>
                </Toast.Body>
            </Toast> 
        </Card>
    )
}

export default BookItem

// {book.isbn && 
// <p>ISBN: {book.isbn[0]}</p>
// }
// <p>Version: {book._version_}</p>

// Placeholder image source: <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>