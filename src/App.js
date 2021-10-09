import React, { useState} from "react"
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom"
import MyLibrary from './pages/MyLibrary'
import SearchBooks from "./pages/SearchBooks"

function App() {
  const [savedBooks, setNewBook] = useState([])
  
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
              <MyLibrary savedBooks={savedBooks} />
            </Route>
            <Route path='/SearchBooks'>
              <h2>Search Books</h2>
              <SearchBooks savedBooks={savedBooks} setNewBook={setNewBook} />
            </Route>
        </Switch>
        </main>
       </div>
    </Router>
    
  )    
}

export default App;