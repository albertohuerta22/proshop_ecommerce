import { configureStore, createSlice } from '@reduxjs/toolkit';
import { productListReducer } from './reducers/productReducer';
// import { combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

const preloadedState = {};

const store = configureStore({
  reducer: {
    productList: productListReducer,
  },
  preloadedState,
});

export default store;
