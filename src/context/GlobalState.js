import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Initial State
const initialstate = {
    savedBooks: [
        { id: '0000', title: 'On Writing Well', author_name: ['William Zinsser'], cover_i: '20450', first_publish_year: '1976'}
    ]
}

// create context
export const GlobalContext = createContext(initialstate);

// provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialstate);

    // Actions
    function addBook(book) {
        dispatch({
            type: 'ADD_BOOK',
            payload: book
        })
    }
    function deleteBook(id) {
        dispatch({
            type: 'DELETE_BOOK',
            payload: id
        })
    }


    // provider provides state and actions to components it is wrapped around
    return (<GlobalContext.Provider value={{
        savedBooks:state.savedBooks,
        addBook,
        deleteBook
    }}>
        {children}
    </GlobalContext.Provider>
    )
}
