import { combineReducers } from "redux";

import menuReducer from "./menuSlice";
import productReducer from "./slices/productSlice";

const rootReducer = combineReducers({
  menu: menuReducer,
  product:productReducer,
  
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
