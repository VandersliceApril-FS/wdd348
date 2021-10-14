import React from 'react'
import { Container } from 'react-bootstrap'

const styles = {
    title: {
        textAlign: 'center',
        margin: '3rem'
    }
}

function PageHeader({ title }) {
    return (
        <Container>
            <h1 style={styles.title}>{title}</h1>
        </Container>
    )
}

export default PageHeader
