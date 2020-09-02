import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Landing } from './components/Landing'
import { Menu } from './components/Menu'
import SignUp from './components/SignUp'
import Login from './components/Login'
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (

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
        <Route>
          <Login setLoggedIn={setLoggedIn} path="/login" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
