import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import BookItem from '../components/BookItem'

const styles = {
    instruction: {
        textAlign: 'center',
        margin: '4rem'
    }
}

function MyLibrary () {
    const { savedBooks } = useContext(GlobalContext);
    return (savedBooks.length === 0) ? (<h5 style={styles.instruction}>Search for books to add to your library</h5>) : (
        <section className="libraryContainer">    
            {savedBooks.map((book) => (
                <BookItem key={book.id} book={book} />
            ))}
        </section>
    )
}
export default MyLibrary