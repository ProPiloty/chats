import React from 'react';
import {Link} from 'react-router-dom';

import {
  ButtonContainer,
  AuthButton
} from './LandingStyles';

const Landing = () => {
  return (
    <div>
      <h1>Chat App</h1>
      <ButtonContainer>
        <AuthButton>
          <Link to='/login'>
            Log In
          </Link>
        </AuthButton>
        <AuthButton>
          <Link to='/register'>
            Register
          </Link>
        </AuthButton>
      </ButtonContainer>
    </div>
  )
}

export default Landing;