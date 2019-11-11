// Packages
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import promiseMiddleware from 'redux-promise-middleware';

// Reducers
import userReducer from './reducers/userReducer';
import conversationReducer from './reducers/conversationReducer';

// Root Reducer
const rootReducer = combineReducers({
  userReducer,
  conversationReducer
})

// Redux Persist Configuration
const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux Store Export
export const store = createStore(persistedReducer, applyMiddleware(promiseMiddleware));
export const persistor = persistStore(store);