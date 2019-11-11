import React from 'react';
import {Link} from 'react-router-dom';

// styled components
import {
  Container
} from './NavBarStyles'

const NavBar = (props) => {
  const {logout} = props;
  return (
    <Container>
      <p>profile picture</p>
      <nav>
        <Link to='/dashboard/chat' >Chat</Link>
        <Link to='/dashboard/people' >People</Link>
        <Link to='/dashboard/settings' >Settings</Link>
      </nav>
      <button onClick={() => logout()} >logout</button>
    </Container>
  )
}

export default NavBar;