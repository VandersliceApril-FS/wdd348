import React, { useContext } from 'react'
import './ResultCard.css'
import { GlobalContext } from '../../context/GlobalState'
import BookPlaceholder from '../../images/book.png'



function ResultCard({ result }) {
    const {addBook}  = useContext(GlobalContext);
    const coverSrc = `http://covers.openlibrary.org/b/id/${result.cover_i}-S.jpg`

    const onClick = () => {
        console.log('add button clicked')
        const newBook = {
            id: `${result._version_}`,
            title: `${result.title}`,
            author_name: `${result.author_name[0]}`,
            cover_i: `${result.cover_i}`,
            first_publish_year: `${result.first_publish_year}`
        }
        addBook(newBook);
    }
    
    return (
        <article className="container">
            <div className="card">
                    {result.cover_i
                        ? <img src={coverSrc} alt='book cover' className="coverImage" />
                        : <img src={BookPlaceholder} alt='cover not available' className="coverImage" />
                    }
                <section className="bookInfo">
                    <h2 className="title">{result.title}</h2>
                    {result.author_name &&
                        <h4 className="author">by {result.author_name}</h4>
                    }
                    <p className="publishYear">Publish Year: {result.first_publish_year} </p>
                
                </section>
            </div>
            <button className="buttonPrimary" onClick={onClick}>Add</button>
            
        </article>
    )
}

export default ResultCard
