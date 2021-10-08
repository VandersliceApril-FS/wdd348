import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <NavLink to='/MyLibrary'>MyLibrary</NavLink>
            <NavLink to='/SearchBooks'>Search Books</NavLink>
        </nav>
    )
}
export default Nav