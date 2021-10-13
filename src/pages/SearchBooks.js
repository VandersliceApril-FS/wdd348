import axios from "axios";
import React, { useState, useEffect } from "react"
import Search from '../components/Search'
import SearchResults from "../components/SearchResults"

// https://openlibrary.org/search.json?title=${query}&fields=title,author_name,cover_i,first_publish_year,_version_,isbn,availability&limit=8

function SearchBooks({ setNewBook, savedBooks }) {
    const [query, setQuery] = useState('') // gets the search value from user
    const [isLoading, setIsLoading] = useState(true)
    const [books, setBooks] = useState(null) // search results

    useEffect(() => {
        async function fetchAPI(){
          const result = await axios(`https://openlibrary.org/search.json?title=${query}&fields=title,author_name,cover_i,first_publish_year,_version_,isbn,availability&limit=10`)
          setBooks(result.data.docs)
          setIsLoading(false)
        }
        if(query !== '') {
          fetchAPI();
        }    
    }, [query]);

    return (
        <div>
          <div>
            <Search getQuery={q => setQuery(q)} />
          </div>
          {books &&
            <SearchResults savedBooks={savedBooks} isLoading={isLoading} books={books} setNewBook={setNewBook} />
          }    
        </div>
        );
}
export default SearchBooks