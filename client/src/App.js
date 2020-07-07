import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Landing } from './components/Landing'
import { Menu } from './components/Menu'
import './App.css';

function App() {
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
      </Switch>
    </Router>
  );
}

export default App;
