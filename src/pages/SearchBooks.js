import axios from "axios";
import React, { useState, useEffect } from "react"
import Search from '../components/Search'
import SearchResults from "../components/SearchResults"

// https://openlibrary.org/search.json?q=harry%20potter&fields=author_name,title,cover_i,availability&limit=3

function SearchBooks() {
    const pageTitle = 'Search Books';
    const [query, setQuery] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [books, setBooks] = useState(null)

    useEffect(() => {
        async function fetchAPI(){
          const result = await axios(`https://openlibrary.org/search.json?title=${query}&fields=title,author_name,cover_i,first_publish_year,_version_,isbn,availability&limit=5`)
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
            <SearchResults isLoading={isLoading} books={books} />
          }    
        </div>
        );
}
export default SearchBooks