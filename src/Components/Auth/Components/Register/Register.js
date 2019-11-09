import React, {useState} from 'react';
import {Link} from 'react-router-dom';

// Styled Components
import {
  RegisterContainer,
  RegisterForm
} from './RegisterStyles';

const Register = (props) => {

  // Initializing State
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  // Destructuring Props
  const {userRegister} = props;

  return (
    <RegisterContainer>
      <Link to='/'>Home</Link>
      <h2>Register</h2>
      <RegisterForm>
        <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <input placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
        <button onClick={() => {userRegister({username, email, password, phone})}} >Register</button>
      </RegisterForm>
      <Link to='/login' >If you already have an account, log in here</Link>
    </RegisterContainer>
  )
}

export default Register;