import React, { useState, useEffect } from "react";

// https://openlibrary.org/search.json?q=on+writing+well&fields=*,availability&limit=10

function AddBooks() {
    const pageTitle = 'Add Books';
    const [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState(null);
    let list = [];

    useEffect(() => {
        async function fetchAPI(){
          const response = await fetch(`https://openlibrary.org/search.json?title=${searchValue}&fields=*,availability&limit=10`);
          const data = await response.json();
          const booksResults = data.docs;
    
          setData(booksResults);
        }
        fetchAPI();
    }, );

    if(data) {
    data.forEach(element => {
        list.push(<li>{element.title} {element.subtitle}, <em>{element.author_name}</em></li>)
    });
    }
    return (
        <div>
            <header>
                <h2>{pageTitle}</h2>
            </header>
          <div>
            <label>Enter a book title:</label>
            <input value={searchValue} onChange={e => setSearchValue(e.target.value)}></input>
          </div>
          <h2>You searched for {searchValue}</h2>
          {data &&
           <ol>
              {list}
            </ol>
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