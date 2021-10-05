import React from "react";
import './App.css';
import AddBooks from "./pages/AddBooks";
// import Routes from '.components/Routes'

function App() {
  return (
    <div>
      <main>
        <AddBooks />
      </main>
    </div>
  )    
}

export default App;


  //   fetch("http://openlibrary.org/search.json?title=on+writing_+well&fields=*,availability&limit=3")
  //   .then(response => response.json())
  //   .then(setData);
  // }, []);