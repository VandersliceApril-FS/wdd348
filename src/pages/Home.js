import React from 'react'
import { Container } from 'react-bootstrap'


const styles = {
    heading: {
        width: '30rem',
        height: '25rem',
        fontSize: '4.5rem',
        
    }
}

function Home() {
    return (
        <Container style={styles.bg}>
            <div>
                <h1 style={styles.heading}><strong>Keep track</strong> of all books in your library</h1>
            </div>
            
        </Container>
    )
}

export default Home