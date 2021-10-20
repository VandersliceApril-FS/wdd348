import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

function MainNav() {
    return (
      <nav>
          <NavLink
            className='navLink'
            to='/MyLibrary'
            activeStyle={{
              fontWeight: 'bold',
              color: '#5F0A87'
              }}>
                My Library
          </NavLink>
          <NavLink 
            className='navLink'
            to='/SearchBooks'
            activeStyle={{
              fontWeight: 'bold',
              color: '#5F0A87'
            }}>
                Search Books
          </NavLink>  
      </nav>
    )
}

export default MainNav
