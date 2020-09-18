import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Layout from './components/Layout'
import { Landing } from './components/Landing'
import { Menu } from './components/Menu'
import Profile from './components/Profile'
import PrivateRoute from './components/PrivateRoute'
import { AuthContext } from './contexts/AuthContext'


const AuthedApp = () => {

    const Auth = useContext(AuthContext)

    return (

        <Router>
            <div className="App">
                <h1>AuthedApp</h1>
            </div>
            <Switch>
                <Route exact path="/">
                    <Landing />
                </Route>
                <Route path="/menus">
                    <Menu />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
            </Switch>
        </Router>

    )
}

export default AuthedApp
