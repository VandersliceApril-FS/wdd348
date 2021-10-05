import React from "react"
import './App.css'
import Nav from './components/Nav'

import { BrowserRouter as Router } from "react-router-dom"
import Routes from './components/Routes'

function App() {
  return (
    <Router>
      <div>
        <header>
          <Nav />
        </header>
        <main>
          <Routes />
        </main>
        
       </div>
    </Router>
    
  )    
}

export default App;


  //   fetch("http://openlibrary.org/search.json?title=on+writing_+well&fields=*,availability&limit=3")
  //   .then(response => response.json())
  //   .then(setData);
  // }, []);