import React, {useState} from 'react';
import {Link} from 'react-router-dom';

// Styled Components
import {
  LoginContainer,
  LoginForm
} from './LoginStyles';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {userLogin} = props;

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      userLogin({email, password});
    }
  }

  return (
    <LoginContainer>
      <Link to='/'>Home</Link>
      <h2>Login</h2>
      <LoginForm>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={(e) => {handleLogin(e)}}>Log In</button>
      </LoginForm>
      <Link to='/register'>If you don't have an account, register here</Link>
    </LoginContainer>
  )
}

export default Login;