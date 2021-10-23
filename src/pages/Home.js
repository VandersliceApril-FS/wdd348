import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <section className="homeContainer">
            <div className="aboutContainer">
                <h1 className="homeHeader"><strong>Keep track</strong> of all books in your library</h1>
                <p className="homeAbout">We currently live in a sort of limbo where some of our books live on the shelf and some live in a device. Keep track of both digital and physical books by cataloguing them in home library.</p>
            </div>
            <NavLink
                to='/SearchBooks'
                >
                    <button className="buttonPrimary">Start Adding Books</button>
            </NavLink> 
        </section>
    )
}

export default Home