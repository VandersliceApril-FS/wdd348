import React, { useState} from "react"
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom"
import MyLibrary from './pages/MyLibrary'
import SearchBooks from "./pages/SearchBooks"
import { Container, Navbar, Nav } from 'react-bootstrap'
import './custom.scss'

const styles = {
  container: {
    width: '100%',
    height: '100vh'
  },
  link: {
    textDecoration: 'none',
    margin: '0 1rem'
  },
}

function App() {
  // savedBooks holds the current array of books the user has saved and
  // sets any books that are added
  // gets passed all the way down to the bookItem so its state can be updated after a search
  const [savedBooks, setNewBook] = useState([])
  
  return (
    <Router>
      <Container fluid>
        <Navbar>
            <Navbar.Brand>home-library</Navbar.Brand>
            <Nav>
              <Navbar.Text>
                <NavLink
                style={styles.link}
                to='/'>
                    MyLibrary
                </NavLink>
              </Navbar.Text>
              <Navbar.Text>
                <NavLink 
                style={styles.link}
                to='/SearchBooks'>
                    Search Books
                </NavLink>
              </Navbar.Text>
                
            </Nav>
        </Navbar>
        <Container fluid>
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
        </Container>
       </Container>
    </Router>
  )    
}

export default App;