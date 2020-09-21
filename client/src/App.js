import React, { useContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import axios from 'axios'
import PrivateRoute from './components/PrivateRoute'
import Layout from './components/Layout'
import { Landing } from './components/Landing'
import { Menu } from './components/Menu'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css';
import { AuthContext } from './contexts/AuthContext';

function App() {
  const [currentUser, setCurrentUser] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const auth = useContext(AuthContext)

  const checkLoggedIn = () => {
    console.log("Checking login status...")
    axios.get('api/logged_in', {
      withCredentials: true
    })
      .then((response) => {
        console.log("User currently logged in")
        setIsLoggedIn(response.data.loggedIn)
        setCurrentUser(response.data.user)
      })
  }

  useEffect(() => checkLoggedIn())

  return isLoggedIn ?

    <div>
      <Layout >
        <Router>
          <div className="App">
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
            <PrivateRoute path="/profile" isLoggedIn={isLoggedIn} component={Profile} />
          </Switch>
        </Router>
      </Layout></div>
    : <Login />
}

export default App;
