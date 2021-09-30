import React, { useState, useEffect } from "react";
import './App.css';

// http://openlibrary.org/search/authors.json?q=twain
// http://openlibrary.org/search.json?author=tolkien
// https://openlibrary.org/search.json?q=piggy+elephant
// https://openlibrary.org/search.json?q=on+writing+well&fields=*,availability&limit=1


function App() {
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
}

export default App;


  //   fetch("http://openlibrary.org/search.json?title=on+writing_+well&fields=*,availability&limit=3")
  //   .then(response => response.json())
  //   .then(setData);
  // }, []);