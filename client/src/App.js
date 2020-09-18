import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Layout from './components/Layout'
import { Landing } from './components/Landing'
import { Menu } from './components/Menu'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const currentUser = localStorage.getItem('current_user')


  return (
    <Layout loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
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
            <Login setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
          </Route>

          <PrivateRoute path="/profile" loggedIn={loggedIn} component={Profile} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
