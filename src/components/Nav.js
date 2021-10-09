import React from 'react'
import { NavLink } from 'react-router-dom'

const styles = {
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
}

function Nav() {
    return (
        <nav style={styles.navContainer}>
            <NavLink 
              style={styles.link} 
              to='/MyLibrary'
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
    )
}
export default Nav