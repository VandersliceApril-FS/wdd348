import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import HeroImage from '../images/ereader.jpg'

const styles = {
    headingContainer: {
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        width: '70%'
    },
    heading: {
        marginBottom: '2rem',
        fontSize: '2rem'
    },
    button: {
        width: 'fit-content',
        background: '#5F0A87',
        padding: '.5rem 1rem',
        color: '#fff',
        border: 'none',
        borderRadius: '2px'
    }
}

function Home() {
    return (
        <section className="homeContainer">
            <div className="aboutContainer">
                <h1 className="homeHeader"><strong>Keep track</strong> of all books in your library</h1>
                <p className="homeAbout">We currently live in a sort of limbo where some of our books live on the shelf and some live in a device. Keep track of both digital and physical books by cataloguing them in home library.</p>
            </div>
            <NavLink 
                style={styles.link}
                to='/SearchBooks'
                >
                    <Button className="buttonPrimary">Start Adding Books</Button>
                </NavLink> 
        </section>
    )
}

export default Home