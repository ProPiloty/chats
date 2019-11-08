import React from 'react';
import axios from 'axios';

// Child Components
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

// Styled Components
import {
  AuthContainer
} from './AuthStyles';

const Auth = (props) => {
  const isLogin = props.match.path === '/login';

  const handleUserLogin = (userData) => {
    console.log(userData);
  }

  const handleUserRegister = (userData) => {
    console.log(userData);
  }

  return (
    <AuthContainer>
      {
        isLogin ?
        <Login userLogin={handleUserLogin} />
        :
        <Register userRegister={handleUserRegister} />
      }
    </AuthContainer>
  )
}

export default Auth;