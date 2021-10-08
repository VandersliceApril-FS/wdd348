import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SearchBooks from '../pages/SearchBooks'
import MyLibrary from '../pages/MyLibrary'
import Home from '../pages/Home'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/MyLibrary' component={MyLibrary} />
            <Route path='/SearchBooks' component={SearchBooks} />
        </Switch>
    )
}
export default Routes