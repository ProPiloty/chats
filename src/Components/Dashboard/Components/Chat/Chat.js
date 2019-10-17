import React from 'react';

// child components
import Conversations from './Components/Conversations/Conversations';
import Messages from './Components/Messages/Messages';

// styled components
import {
  Container
} from './ChatStyles';

const Chat = () => {
  return (
    <Container>
      <Conversations />
      <Messages />
    </Container>
  )
}

export default Chat;