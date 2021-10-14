import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'

function Search({ getQuery }) {
    const [text, setText] = useState('')
    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    
    return (
        <Container style={{margin: '2rem 0'}}>
            <Form>
                <Form.Control as="input" 
                value={text}
                // throttling, debouncing, backing off
                onChange={e => onChange(e.target.value)}
                />
            </Form>
        </Container>
    )
}

export default Search
