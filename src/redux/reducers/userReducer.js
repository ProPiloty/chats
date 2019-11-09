// Initializing state
const initialState = {
  user: {}
};

// Action types
const UPDATE_USER = 'UPDATE_USER';
const CLEAR_USER = 'CLEAR_USER';


// Action exports
export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user
  }
}

export function clearUser() {
  return {
    type: CLEAR_USER,
    payload: {}
  }
}

// User reducer
function userReducer(state = initialState, action) {
  switch(action.type){
    case UPDATE_USER:
      return {...state, user: action.payload};
    case CLEAR_USER:
      return {...state, user: action.payload};
    default:
      return state;
  }
}

// Reducer export
export default userReducer;