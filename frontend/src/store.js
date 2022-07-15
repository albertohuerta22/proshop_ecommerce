import { configureStore, createSlice } from '@reduxjs/toolkit';
import {
  productDetailsReducer,
  productListReducer,
} from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducers';

const preloadedState = {};

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
  },
  preloadedState,
});

export default store;
