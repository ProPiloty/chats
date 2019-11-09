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

  return (
    <LoginContainer>
      <Link to='/'>Home</Link>
      <h2>Login</h2>
      <LoginForm>
        <input onChange={(e) => setEmail(e.target.value)} />
        <input onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => {userLogin({email, password})}}>Log In</button>
      </LoginForm>
      <Link to='/register'>If you don't have an account, register here</Link>
    </LoginContainer>
  )
}

export default Login;