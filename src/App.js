import React, { useState} from "react"
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom"
import MyLibrary from './pages/MyLibrary'
import SearchBooks from "./pages/SearchBooks"
import Home from './pages/Home'
import Brand from './images/bookshelf.png'
import PageHeader from './components/PageHeader'
import { Image, Container, Navbar, Nav } from 'react-bootstrap'
import './custom.scss'

const styles = {
  container: {
    width: '100%',
    height: '100vh'
  },
  link: {
    textDecoration: 'none',
    margin: '0 1rem',
    color: '#A68A64'
  },
  brand: {
    height: '4rem',
    width: '3rem'
  }
}

function App() {
  const [savedBooks, setNewBook] = useState([])
  
  return (
    <Router>
      <Container fluid>
        <Navbar>
            <Navbar.Brand>
              <NavLink 
                to='/'>
                  <Image src={Brand} alt='bookshelf brand icon' style={styles.brand} />
              </NavLink>
            </Navbar.Brand>
            <Nav>
                <NavLink
                style={styles.link}
                to='/MyLibrary'
                activeStyle={{
                  fontWeight: 'bold',
                  borderBottom: '1px solid #764a6d'
                }}>
                    My Library
                </NavLink>
                <NavLink 
                style={styles.link}
                to='/SearchBooks'
                activeStyle={{
                  fontWeight: 'bold',
                  borderBottom: '1px solid #764a6d'
                }}>
                    Search Books
                </NavLink>  
            </Nav>
        </Navbar>
        <Container fluid>
          <Switch>
              <Route exact path='/'>
                <PageHeader title='About' />
                <Home />
              </Route>
              <Route exact path='/MyLibrary'>
                <PageHeader title='My Library' />
                <MyLibrary savedBooks={savedBooks} />
              </Route>
              <Route path='/SearchBooks'>
                <PageHeader title='Search Books' />
                <SearchBooks savedBooks={savedBooks} setNewBook={setNewBook} />
              </Route>
          </Switch>
        </Container>
       </Container>
    </Router>
  )    
}

export default App;

// Brand Image Source