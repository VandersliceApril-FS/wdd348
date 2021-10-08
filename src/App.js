import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom"
import MyLibrary from './pages/MyLibrary'
import SearchBooks from "./pages/SearchBooks"

function App() {
  const [newBook, setNewBook] = useState('')
  const savedBooks = []

  useEffect(() => {
    savedBooks.push(newBook)
  }, [newBook])

  return (
    <Router>
      <div>
        <header>
          <nav>
            <NavLink to='/'>MyLibrary</NavLink>
            <NavLink to='/SearchBooks'>Search Books</NavLink>
          </nav>
        </header>
        <main>
        <Switch>
            <Route exact path='/'>
              <h2>My Library</h2>
              <MyLibrary bookList={savedBooks} />
            </Route>
            <Route path='/SearchBooks'>
              <h2>Search Books</h2>
              <SearchBooks getNewBook={b => setNewBook(b)} />
            </Route>
        </Switch>
        </main>
       </div>
    </Router>
    
  )    
}

export default App;