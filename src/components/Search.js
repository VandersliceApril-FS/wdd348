import React, { useState } from 'react'

function Search({ getQuery }) {
    const [text, setText] = useState('')
    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    
    return (
        <form>
            <input type="text"
            placeholder="search a title"
            value={text}
            // throttling, debouncing, backing off
            onChange={e => onChange(e.target.value)}
            />
        </form>
    )
}

export default Search
