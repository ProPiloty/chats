import React from 'react';

// child components

// styled components
import {
  Container
} from './ChatBlockStyles';

const ChatBlock = ({chat}) => {
  const {name, message} = chat;
  return (
    <Container>
      <p>Pic</p>
      <p>{name}</p>
      <p>{message}</p>
    </Container>
  )
}

export default ChatBlock;