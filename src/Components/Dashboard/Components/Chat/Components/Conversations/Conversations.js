import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// child components
import ChatBlock from './Components/ChatBlock/ChatBlock';

// styled components
import {
  Container,
  List
} from './ConversationsStyles';

const Conversations = (props) => {

  // Connecting to redux state
  const reduxState = useSelector(state => (state))
  const dispatch = useDispatch();

  const {conversations} = reduxState.conversationReducer;

  const listOfChats = conversations.map((chat, ind) => (
    <ChatBlock chat={chat} key={ind} />
  ));

  return (
    <Container>
      <h1>My Conversations:</h1>
      <List>
        {listOfChats}
      </List>
    </Container>
  )
}

export default Conversations;