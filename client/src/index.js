import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import { AuthContext } from './contexts/AuthContext'


ReactDOM.render(
  <React.StrictMode>
    <AuthContext>
      <App />
    </AuthContext>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
