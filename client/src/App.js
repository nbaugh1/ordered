import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Landing } from './components/Landing'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

      </div>
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
        {/* <Route path="/menu">
          <Menu />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
