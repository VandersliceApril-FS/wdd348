import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Container } from 'react-bootstrap'
import BookItem from '../components/Book/BookItem'
import './MyLibrary.css'

const styles = {
    instruction: {
        textAlign: 'center',
        margin: '4rem'
    }
}

function MyLibrary () {
    const { savedBooks } = useContext(GlobalContext);
    return (savedBooks.length === 0) ? (<h5 style={styles.instruction}>Search for books to add to your library</h5>) : (
        <Container className="libraryContainer">    
            {savedBooks.map((book) => (
                <BookItem key={book.id} book={book} />
            ))}
        </Container>
    )
}
export default MyLibrary