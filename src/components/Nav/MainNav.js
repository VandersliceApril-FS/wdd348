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
              fontSize: '1.6rem',
              fontWeight: '700',
              color: '#463f3a'
              }}>
                My Library
          </NavLink>
          <NavLink 
            className='navLink'
            to='/SearchBooks'
            activeStyle={{
              fontSize: '1.6rem',
              fontWeight: '700',
              color: '#463f3a'
            }}>
                Search Books
          </NavLink>  
      </nav>
    )
}

export default MainNav
