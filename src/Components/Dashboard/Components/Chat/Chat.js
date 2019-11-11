// Packages
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader';
import io from 'socket.io-client';

// Redux imports
import {getConversations} from './../../../../redux/reducers/conversationReducer';

// child components
import Conversations from './Components/Conversations/Conversations';
import Messages from './Components/Messages/Messages';

// styled components
import {
  Container
} from './ChatStyles';

const Chat = () => {
  // Initializes Socket.io-client
  // const socket = io();

  // Connecting to redux state
  const reduxState = useSelector(state => (state))
  const dispatch = useDispatch();

  // Destructuring Redux State
  const {loading} = reduxState.conversationReducer;

  useEffect(() => {
    dispatch(getConversations());
  }, [])

  return (
    <Container>
      {
        loading ?
        <BeatLoader />
        :
        <>
          <Conversations />
          <Messages />
        </>
      }
    </Container>
  )
}

export default Chat;