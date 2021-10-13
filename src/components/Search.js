import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

function Search({ getQuery }) {
    const [text, setText] = useState('')
    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    
    return (
        <section>
            <Form>
                <Form.Control as="input" 
                value={text}
                // throttling, debouncing, backing off
                onChange={e => onChange(e.target.value)}
                />
            </Form>
        </section>
    )
}

export default Search
