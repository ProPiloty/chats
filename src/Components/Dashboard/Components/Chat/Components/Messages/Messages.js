import React from 'react';

// styled components
import {
  Container
} from './MessagesStyles';

const Messages = () => {
  return (
    <Container>
      <div>
        <h1>Chat Name</h1>
        <p>messages</p>
      </div>
      <form>
        <input />
        <button>Send</button>
      </form>
    </Container>
  )
}

export default Messages;