import { createSlice } from "@reduxjs/toolkit";

import { Product } from "../../interfaces/Product";

interface shoppingCartSliceState {
  cart: Product[];
  isOpen: boolean;
}

const initialState: shoppingCartSliceState = {
  cart: [],
  isOpen: false,
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
  },
});

export const { toggleCart, addToCart, removeFromCart } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
