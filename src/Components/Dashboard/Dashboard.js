import React from 'react';

// child components
import Chat from './Components/Chat/Chat';
import NavBar from './Components/NavBar/NavBar';

// styled components
import {
  Container
} from './DashboardStyles'

const Dashboard = () => {
  return (
    <Container>
      <NavBar />
      <Chat />
    </Container>
  )
}

export default Dashboard;