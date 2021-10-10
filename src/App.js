import React, { useState} from "react"
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom"
import MyLibrary from './pages/MyLibrary'
import SearchBooks from "./pages/SearchBooks"

const styles = {
  container: {
    width: '100%',
    height: '100vh'
  },
  navContainer: {
    border: '1px solid red',
    width: '30rem',
    display: 'flex',
    justifyContent: 'space-around'
  },
  link: {
    textDecoration: 'none',
    color: '#1C1D21',
    fontWeight: '400',
    fontSize: '1.5rem'
  },
  header: {
    height: '5%',
    width: '100%',
    border: '1px solid green',
    display: 'flex',
    alignItems: 'center'
  },
  main: {
    width: '95%',
    margin: '3rem auto',
    border: '1px solid red'
  }
}

function App() {
  // savedBooks holds the current array of books the user has saved and
  // sets any books that are added
  // gets passed all the way down to the bookItem so its state can be updated after a search
  const [savedBooks, setNewBook] = useState([])
  
  return (
    <Router>
      <div style={styles.container}>
        <header style={styles.header}>
          <nav style={styles.navContainer}>
              <NavLink 
                style={styles.link} 
                to='/'
                activeStyle={{
                  borderBottom: '1px solid #452B40',
                  color: '#452B40'
                }}>
                  MyLibrary
              </NavLink>
              <NavLink 
                style={styles.link} 
                to='/SearchBooks'
                activeStyle={{
                  borderBottom: '1px solid #452B40',
                  color: '#452B40'
                }}>
                  Search Books
              </NavLink>
          </nav>
        </header>
        <main style={styles.main}>
          <Switch>
              <Route exact path='/'>
                <h1>My Library</h1>
                <MyLibrary savedBooks={savedBooks} />
              </Route>
              <Route path='/SearchBooks'>
                <h1>Search Books</h1>
                <SearchBooks savedBooks={savedBooks} setNewBook={setNewBook} />
              </Route>
          </Switch>
        </main>
       </div>
    </Router>
  )    
}

export default App;