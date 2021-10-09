import React, {useState} from 'react'

function Search({ getQuery }) {
    const [text, setText] = useState('')
    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    
    return (
        <section>
            <form>
                <input 
                type='text'
                value={text}
                // throttling, debouncing, backing off
                onChange={e => onChange(e.target.value)}
                autoFocus
                />
            </form>
        </section>
    )
}

export default Search
