import React from "react"
import { GlobalProvider } from './context/GlobalState'
import { BrowserRouter as Router, NavLink } from "react-router-dom"
import Routes from './components/Routes'
import MainNav from './components/Nav/MainNav'
import Brand from './images/brand-01.png'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const styles = {
  container: {
    width: '100%',
    height: '100vh'
  },
  
  brand: {
    height: '2rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2rem 0 .5rem 0'
  },
  main: {
    margin: '2rem 0 0 0 '
  }
}

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Container fluid>
            <header style={styles.header}>
                <NavLink 
                  to='/'>
                    <img src={Brand} alt='bookshelf brand icon' style={styles.brand} />
                </NavLink>
            </header>
          <MainNav />
          <Container style={styles.main} fluid>
            <Routes />
          </Container>
        </Container>
      </Router>
    </GlobalProvider>
  )    
}

export default App;