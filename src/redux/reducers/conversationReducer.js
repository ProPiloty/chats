// Packages
import axios from 'axios';

// Initializing state
const initialState = {
  roomID: null,
  conversations: [],
  loading: true
};

// Action types
const GET_CONVERSATIONS = 'GET_CONVERSATIONS';

// Action exports
export function getConversations() {

  let payload = axios.get('/conversations/all').then((res) => (res.data));

  return {
    type: GET_CONVERSATIONS,
    payload
  }
}

// Conversation reducer
function conversationReducer(state = initialState, action) {
  switch(action.type) {
    case GET_CONVERSATIONS + '_PENDING':
      return {...state, loading: true};
    case GET_CONVERSATIONS + '_FULFILLED':
      return {...state, conversations: action.payload, loading: false};
    default:
      return state;
  }
}

// Reducer export
export default conversationReducer;