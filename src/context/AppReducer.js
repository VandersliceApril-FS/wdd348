// eslint-disable-next-line
export default (state, action) => {
    switch(action.type) {
        case 'ADD_BOOK':
            return {
                ...state,
                // return the current saved books, add the new one in the payload. 
                savedBooks: [action.payload, ...state.savedBooks]
            }
        default: 
            return state;
    }
}

// how to specify the application's state changes in response to actions to the context