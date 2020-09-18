import React, { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext'
import AuthedApp from './AuthedApp'
import UnAuthedApp from './UnAuthedApp'
import './App.css';



function App() {

  const Auth = useContext(AuthContext)


  return Auth.isAuth ? <AuthedApp /> : <UnAuthedApp />

}

export default App;
