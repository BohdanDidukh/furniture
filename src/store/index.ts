import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./menuSlice";
import productReducer from "./slices/productSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    product:productReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
 