import React from 'react'
import './BookItem.css'

const styles = {
    container: {
        border: '1px solid brown',
        width: '20rem',
        height: '35rem',
        padding: '1rem'
    },
    coverImage: {
        boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
        maxWidth: '10rem',
    },
    coverContainer: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    listContainer: {
        listStyle: 'none'
    },
    author: {
        fontWeight: '300',
        fontSize: '1.3rem',
        marginBottom: '1rem'
    },
    miscDetails: {
        margin: '0'
    }

}

// savedBooks is passed all the way down from the main page to all book items so that when 'add' is clicked on a book, the current state of savedBooks can be updated
function BookItem({book, setNewBook, savedBooks }) {
    const coverSrc = `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    
    const onClick = () => {
        setNewBook([...savedBooks, book])
    }
    
    return (
        <article style={styles.container}>
            <div style={styles.coverContainer}>
                {book.cover_i &&
                    <img src={coverSrc} alt='book cover' style={styles.coverImage}/>
                }
            </div>
            <section style={styles.listContainer}>
                {book.subtitle ? <h2>{book.title}: {book.subtitle}</h2> : <h2>{book.title}</h2>}
                {book.author_name &&
                    <h4 style={styles.author}>by {book.author_name[0]}</h4>
                }
                <div style={styles.miscDetails}>
                    <p>Publish Year:{book.first_publish_year} </p>
                    {book.isbn && 
                        <p>ISBN: {book.isbn[0]}</p>
                    }
                    <p>Version: {book._version_}</p>
                </div>
            </section>
            <button onClick={book => onClick(book)}>Add</button>
        </article>
    )
}

export default BookItem
