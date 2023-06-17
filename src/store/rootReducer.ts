import { combineReducers } from "redux";

import menuReducer from "./slices/menuSlice";
import productReducer from "./slices/productSlice";
import shoppingCartReducer from "./slices/shoppingCartSlice";

const rootReducer = combineReducers({
  menu: menuReducer,
  product: productReducer,
  cart: shoppingCartReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
