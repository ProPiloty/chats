// Packages
import { createStore, combineReducers } from 'redux';

// Reducers
import userReducer from './reducers/userReducer';

export const store =  createStore(userReducer);