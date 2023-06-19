import { createSlice } from "@reduxjs/toolkit";

import { Product } from "../../interfaces/Product";

interface shoppingCartSliceState {
  cart: Product[];
  isOpen: boolean;
  orderAmount: number;
}

const initialState: shoppingCartSliceState = {
  cart: [],
  isOpen: false,
  orderAmount: 0,
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    orderAmountCounter: (state, action) => {
      state.orderAmount = action.payload;
    },
  },
});

export const { toggleCart, addToCart, removeFromCart, orderAmountCounter } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
