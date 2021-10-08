import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SearchBooks from '../pages/SearchBooks'
import MyLibrary from '../pages/MyLibrary'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={MyLibrary} />
            <Route path='/MyLibrary' component={MyLibrary} />
            <Route path='/SearchBooks' component={SearchBooks} />
        </Switch>
    )
}
export default Routes