import axios from "axios";
import React, { useState, useEffect } from "react";
import BookList from '../components/BookList'
import Search from '../components/Search'

// https://openlibrary.org/search.json?q=[title]=*,availability&limit=10

function AddBooks() {
    const pageTitle = 'Add Books';
    const [query, setQuery] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [books, setBooks] = useState(null)
    

    useEffect(() => {
        async function fetchAPI(){
          const result = await axios(`https://openlibrary.org/search.json?title=${query}&fields=*,availability&limit=5`)
          console.log(result.data.docs[0])
          setBooks(result.data.docs)
          setIsLoading(false)
        }
        
        fetchAPI();
    }, [query]);

    return (
        <div>
            <header>
                <h2>{pageTitle}</h2>
            </header>
          <div>
            <Search getQuery={q => setQuery(q)} />
          </div>
          {books &&
            <BookList isLoading={isLoading} books={books} />
          }    
        </div>
        );
}
export default AddBooks