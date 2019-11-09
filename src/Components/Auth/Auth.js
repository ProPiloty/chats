import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';

// Redux Reducers
import {updateUser} from '../../redux/reducers/userReducer';

// Child Components
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

// Styled Components
import {
  AuthContainer
} from './AuthStyles';

const Auth = (props) => {

  // Connecting to redux state
  const user = useSelector(state => (state.user))
  const dispatch = useDispatch();

  // Checks path name to display correct component
  const isLogin = props.match.path === '/login';

  // Logs in a user
  const handleUserLogin = (userData) => {
    axios.post('/auth/login', userData)
      .then((res) => {
        dispatch(updateUser(res.data));
        props.history.push('/dashboard');
      })
      .catch((err) => {
        console.error(err);
      })
  }

  // Registers a user
  const handleUserRegister = (userData) => {
    axios.post('/auth/register', userData)
      .then((res) => {
        dispatch(updateUser(res.data));
        props.history.push('/dashboard');
      })
      .catch((err) => {
        console.error(err);
      })
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