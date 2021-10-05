import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AddBooks from '../pages/AddBooks'
import MyLibrary from '../pages/MyLibrary'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={MyLibrary} />
            <Route path='/MyLibrary' component={MyLibrary} />
            <Route path='/AddBooks' component={AddBooks} />
        </Switch>
    )
}
export default Routes