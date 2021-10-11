import React from 'react'
import './BookItem.css'

const styles = {
    container: {
        border: '1px solid brown',
        width: '20rem',
        height: '32rem',
        marginBottom: '1rem',
        display: 'inline-block',
        position: 'relative'
    },
    coverImage: {
        // boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        height: '100%',
        display: 'block',
        margin: 'auto'
    },
    coverContainer: {
        height: '18rem',
        border: '1px solid yellow',
    },
    itemInfo: {
        margin: '1rem 0',
        border: '1px solid pink',
        
    },
    author: {
        fontWeight: '300',
        fontSize: '1.2rem',
        margin: '0'
    },
    button: {
        position: 'absolute',
        bottom: '2rem'
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
            <section style={styles.coverContainer}>
                {book.cover_i &&
                    <img src={coverSrc} alt='book cover' style={styles.coverImage}/>
                }
            </section>
            <section style={styles.itemInfo}>
                {book.subtitle 
                    ? <h2 className="title">{book.title}: {book.subtitle}</h2>
                    : <h2 className="title">{book.title}</h2>
                }        
                {book.author_name &&
                    <h4 style={styles.author}>by {book.author_name[0]}</h4>
                }
                <p>Publish Year: {book.first_publish_year} </p>
            </section>
            <button style={styles.button} onClick={book => onClick(book)}>Add</button>
        </article>
    )
}

export default BookItem

// {book.isbn && 
// <p>ISBN: {book.isbn[0]}</p>
// }
// <p>Version: {book._version_}</p>