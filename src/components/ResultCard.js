import React, { useContext, useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { GlobalContext } from '../context/GlobalState'

const styles = {
    button: {
        width: 'fit-content',
        background: '#5F0A87',
        padding: '.5rem 1rem',
        color: '#fff',
        border: 'none',
        borderRadius: '2px'
    },
    toastContainer: {
        margin: '.5rem 0 0 0',
        width: '100%',
        height: '2rem',
        border: '1px solid #f5f5f5',
        position: 'absolute',
        bottom: '0',
        right: '0'
    },
    toast: {
        background: 'green'
    }

}

function ResultCard({ result }) {
    const {addBook}  = useContext(GlobalContext);
    const [show, setShow] = useState(false);

    const onClick = () => {
        console.log('add button clicked')
        const newBook = {
            id: `${result._version_}`,
            title: `${result.title}`,
            author_name: `${result.author_name[0]}`,
            cover_i: `${result.cover_i}`,
            first_publish_year: `${result.first_publish_year}`
        }
        
        addBook(newBook);
        setShow(true)
    }
    
    return (
        <Card>
            <Card.Body>
                <Card.Title>{result.title}</Card.Title>
                {result.author_name &&
                    <Card.Subtitle>{result.author_name}</Card.Subtitle>
                }
                <Card.Text>{result.first_publish_year}</Card.Text>
                <Button style={styles.button} onClick={onClick}>Add</Button>
            </Card.Body>
            <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>Added</Alert>
        </Card>
    )
}

export default ResultCard
