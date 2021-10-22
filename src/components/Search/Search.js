import React, { useState } from 'react'
import './Search.css'

function Search({ getQuery }) {
    const [text, setText] = useState('')
    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    
    return (
        <form>
            <input type="text"
            placeholder="search by author or title"
            value={text}
            // throttling, debouncing, backing off
            onChange={e => onChange(e.target.value)}
            />
        </form>
    )
}

export default Search
