import React from "react"
import { GlobalProvider } from './context/GlobalState'
import { HashRouter as Router, NavLink } from "react-router-dom"
import Routes from './components/Routes'
import MainNav from './components/Nav/MainNav'
import Brand from './images/brand-01.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


const styles = {
  container: {
    maxWidth: '90rem',
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
    margin: '1rem auto'
  }
}

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div style={styles.container}>
            <header style={styles.header}>
                <NavLink 
                  to='/'>
                    <img src={Brand} alt='bookshelf brand icon' style={styles.brand} />
                </NavLink>
            </header>
          <MainNav />
          <main style={styles.main}>
            <Routes />
          </main>
        </div>
      </Router>
    </GlobalProvider>
  )    
}

export default App;