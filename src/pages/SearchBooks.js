import axios from "axios";
import React, { useState, useEffect } from "react"
import Search from '../components/Search/Search'
import SearchResults from "../components/SearchResults/SearchResults"


// https://openlibrary.org/search.json?title=${query}&fields=title,author_name,cover_i,first_publish_year,_version_,isbn,availability&limit=8

function SearchBooks() {
    const [query, setQuery] = useState('') // gets the search value from user
    const [isLoading, setIsLoading] = useState(true)
    const [searchResults, setSearchResults] = useState(null) // search results

    useEffect(() => {
        async function fetchAPI(){
          const result = await axios(`https://openlibrary.org/search.json?title=${query}&fields=title,author_name,cover_i,first_publish_year,_version_,isbn,availability&limit=10`)
          setSearchResults(result.data.docs)
          setIsLoading(false)
        }
        if(query !== '') {
          fetchAPI();
        }    
    }, [query]);

    return (
        <>
            <Search getQuery={q => setQuery(q)} />
          {searchResults &&
            <SearchResults isLoading={isLoading} searchResults={searchResults} />
          }    
        </>
        );
}
export default SearchBooks