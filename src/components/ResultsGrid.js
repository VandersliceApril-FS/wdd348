import React, { useContext } from 'react'
import BookPlaceholder from '../images/book.png'
import { GlobalContext } from '../context/GlobalState'

function ResultsGrid({ result }) {
    const coverSrc = `http://covers.openlibrary.org/b/id/${result.cover_i}-S.jpg`
    const {addBook}  = useContext(GlobalContext);

    const onClick = () => {
        const newBook = {
            title: `${result.title}`,
            author_name: `${result.author_name}`,
            cover_i: `${result.cover_i}`,
            first_publish_year: `${result.first_publish_year}`
        }
        
        addBook(newBook);
    }
    
    return (
        <tr>
            <td>
                {result.cover_i
                    ? <img src={coverSrc} alt='book cover' />
                    : <img src={BookPlaceholder} alt='book cover not available' />
                }
            </td>
            <td>{result.title}</td>
            {result.author_name &&
                <td>{result.author_name}</td>
            }
            <td>{result.first_publish_year}</td>
            <button onClick={onClick}>Add to Library</button>
        </tr>
    )
}

export default ResultsGrid
