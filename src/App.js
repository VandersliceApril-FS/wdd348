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