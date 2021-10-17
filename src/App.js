import React, { useState} from "react"
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom"
import MyLibrary from './pages/MyLibrary'
import SearchBooks from "./pages/SearchBooks"
import Home from './pages/Home'
import Brand from './images/brand-01.png'
import PageHeader from './components/PageHeader'
import { Image, Container, Nav } from 'react-bootstrap'
import './custom.scss'
import { FaUser } from "react-icons/fa";

const styles = {
  container: {
    width: '100%',
    height: '100vh'
  },
  link: {
    textDecoration: 'none',
    fontSize: '2rem',
    margin: '0 1rem',
    color: '#E1D8CB',
    
  },
  brand: {
    height: '3rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 1rem 2rem 1rem'
  }
}

function App() {
  const [savedBooks, updateSavedBooks] = useState([])
  return (
    <Router>
      <Container fluid>
          <header style={styles.header}>
              <NavLink 
                to='/'>
                  <Image src={Brand} alt='bookshelf brand icon' style={styles.brand} />
              </NavLink>
              <FaUser />
          </header>
            <Nav className='justify-content-center'>
                <NavLink
                style={styles.link}
                to='/MyLibrary'
                activeStyle={{
                  fontWeight: 'bold',
                  borderBottom: '1px solid #764a6d',
                  color: '#A68A64'
                }}>
                    My Library
                </NavLink>
                <NavLink 
                style={styles.link}
                to='/SearchBooks'
                activeStyle={{
                  fontWeight: 'bold',
                  borderBottom: '1px solid #764a6d',
                  color: '#A68A64'
                }}>
                    Search Books
                </NavLink>  
            </Nav>
        
        <Container fluid>
          <Switch>
              <Route exact path='/'>
                <PageHeader title="Home" />
                <Home />
              </Route>
              <Route exact path='/MyLibrary'>
                <MyLibrary savedBooks={savedBooks} updateSavedBooks={updateSavedBooks} />
              </Route>
              <Route path='/SearchBooks'>
                <SearchBooks savedBooks={savedBooks} updateSavedBooks={updateSavedBooks} />
              </Route>
          </Switch>
        </Container>
       </Container>
    </Router>
  )    
}

export default App;