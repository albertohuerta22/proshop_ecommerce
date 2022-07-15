import { configureStore, createSlice } from '@reduxjs/toolkit';
import {
  productDetailsReducer,
  productListReducer,
} from './reducers/productReducer';

const preloadedState = {};

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
  },
  preloadedState,
});

export default store;
