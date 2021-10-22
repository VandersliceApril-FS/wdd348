import React, { useState, useContext } from 'react'
import './ResultCard.css'
import { GlobalContext } from '../../context/GlobalState'

function ResultCard({ result }) {
    const {addBook}  = useContext(GlobalContext);
    const [showAlert, setShowAlert] = useState(false);

    const onClick = () => {
        console.log('add button clicked')
        const newBook = {
            id: `${result._version_}`,
            title: `${result.title}`,
            author_name: `${result.author_name[0]}`,
            cover_i: `${result.cover_i}`,
            first_publish_year: `${result.first_publish_year}`,
            isbn: `${result.isbn[0]}`
        }
        addBook(newBook);
        setShowAlert(true);
    }
    
    return (
        <article className="resultContainer">
            <div className="card">
                <section className="bookResultInfo">
                    <h2 className="resultTitle">{result.title}</h2>
                    {result.author_name &&
                        <h4 className="author">by {result.author_name}</h4>
                    }
                    {result.isbn &&
                    <p className="identifiers">ISBN: {result.isbn[0]}</p>
                    }
                </section>
            </div>
                {showAlert
                    ? <button disabled={true} className="successAlert">Book Added!</button> 
                    : <button className="linkButton" onClick={onClick}>Add</button>
                }
        </article>
    )
}

export default ResultCard
