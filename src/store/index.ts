import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./slices/menuSlice";
import productReducer from "./slices/productSlice";
import shoppingCartReducer from "./slices/shoppingCartSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    product: productReducer,
    cart: shoppingCartReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
