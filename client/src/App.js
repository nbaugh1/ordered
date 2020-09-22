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

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("currentSession"))
  const auth = useContext(AuthContext)

  const checkLoggedIn = () => {
    if (isLoggedIn) {
      console.log("Checking login status...")
      axios.get('api/auto_login',
        {
          withCredentials: true
        })
        .then((response) => {
          console.log("User currently logged in")
          console.log(response.data)
          localStorage.setItem("currentSession", response.data.loggedIn)
          localStorage.setItem("currentUser", response.data.email)
        })
      setIsLoggedIn(localStorage.getItem("currentSession"))
      auth.checkSession()
    }
  }

  useEffect(() => checkLoggedIn(), [isLoggedIn])

  return isLoggedIn ?
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
    </Layout>
    :
    <Layout>
      <Login />
    </Layout>

}

export default App;
