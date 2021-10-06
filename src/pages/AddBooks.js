import axios from "axios";
import React, { useState, useEffect } from "react";
import BookList from '../components/BookList'
import Search from '../components/Search'

// https://openlibrary.org/search.json?q=on+writing+well&fields=*,availability&limit=10

function AddBooks() {
    const pageTitle = 'Add Books';
    const [query, setQuery] = useState('')
    // const [searchValue, setSearchValue] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [books, setBooks] = useState(null)
    

    useEffect(() => {
        async function fetchAPI(){
          const result = await axios(`https://openlibrary.org/search.json?title=${query}&fields=*,availability&limit=10`);
          console.log(result.data.docs)
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
            {/* <label>Enter a book title:</label>
            <input value={searchValue} onChange={e => setSearchValue(e.target.value)}></input> */}
          </div>
          {/* <h2>You searched for {searchValue}</h2> */}
          {books &&
            <BookList isLoading={isLoading} books={books} />
          }

          
          
        </div>
        );
    
    
    // return (
    //     <section>
    //         <header>
    //             <h1>{pageTitle}</h1>
    //         </header>
            
    //     </section>
    // )
}
export default AddBooks