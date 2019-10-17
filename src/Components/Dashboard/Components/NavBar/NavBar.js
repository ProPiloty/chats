import React from 'react';

// styled components
import {
  Container
} from './NavBarStyles'

const NavBar = () => {
  return (
    <Container>
      <p>profile picture</p>
      <ul>
        <li>Chat</li>
        <li>People</li>
        <li>Settings</li>
      </ul>
      <button>logout</button>
    </Container>
  )
}

export default NavBar;