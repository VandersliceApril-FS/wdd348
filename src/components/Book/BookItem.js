import React from 'react'
import './BookItem.css'
import BookPlaceholder from '../../images/book.png'
import Image from 'react-bootstrap/Image'
import { Card, Container, Button } from 'react-bootstrap'

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
    itemInfo: {
        margin: '1rem 0',
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
    
}

function BookItem({book, setNewBook, savedBooks }) {
    const coverSrc = `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    const onClick = () => {
        setNewBook([...savedBooks, book])
    }
    
    return (
        <Card style={{ width: '20rem', height: '28rem', padding: '1rem 0' }} bg='light'>
            <Container style={{ height: '16rem'  }}>
                {book.cover_i
                    ? <Image src={coverSrc} alt='book cover' style={styles.coverImage} fluid />
                    : <Image src={BookPlaceholder} alt='cover image not available' style={styles.placeholderImage} fluid />
                }
            </Container>
            <Card.Body>
                {book.subtitle 
                    ? <div>
                        <h2 className="title">{book.title}</h2>
                        <p className="subtitle">{book.subtitle}</p>
                    </div>
                    : <h2 className="title">{book.title}</h2>
                }        
                {book.author_name &&
                    <h4 style={styles.author}>by {book.author_name[0]}</h4>
                }
                <p style={styles.first_publish_year}>Publish Year: {book.first_publish_year} </p>
                <Button onClick={book => onClick(book)}>Add</Button>    
            </Card.Body>
        </Card>
    )
}

export default BookItem

// {book.isbn && 
// <p>ISBN: {book.isbn[0]}</p>
// }
// <p>Version: {book._version_}</p>

// Placeholder image source: <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>