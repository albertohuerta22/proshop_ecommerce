import { configureStore, createSlice } from '@reduxjs/toolkit';
// import { combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

const preloadedState = {};

const store = configureStore({
  reducer: {},
  preloadedState,
});

export default store;
