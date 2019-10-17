import React from 'react';

// child components
import ChatBlock from './Components/ChatBlock/ChatBlock';

// styled components
import {
  Container,
  List
} from './ConversationsStyles';

const Conversations = () => {
  const chats = [
    {
      name: "John",
      message: "hello world"
    },
    {
      name: "Jane",
      message: "hello world"
    },
    {
      name: "Bob",
      message: "hello world"
    }
  ];

  const listOfChats = chats.map((chat, ind) => (
    <ChatBlock chat={chat} key={ind} />
  ));

  return (
    <Container>
      <h1>Inbox</h1>
      <List>
        {listOfChats}
      </List>
    </Container>
  )
}

export default Conversations;