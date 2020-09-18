import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { Landing } from './components/Landing'
import Layout from './components/Layout'
import { Menu } from './components/Menu'
import SignUp from './components/SignUp'
import Login from './components/Login'

const UnAuthedApp = () => {
    return (
        <Layout>
            <Router>
                <div className="App">
                    <h1>UnAuthed App</h1>
                </div>
                <Switch>
                    <Route exact path="/">
                        <Landing />
                    </Route>
                    <Route path="/menus">
                        <Menu />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </Layout>
    )
}

export default UnAuthedApp
