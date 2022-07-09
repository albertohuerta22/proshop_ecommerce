import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducer = combineReducers({});
const initialState = {};

const store = configureStore({
  reducer: {},
  initialState,
});

export default store;
