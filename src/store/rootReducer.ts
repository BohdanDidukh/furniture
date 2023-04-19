import { combineReducers } from "redux";

import menuReducer from "./menuSlice";

// Комбінувати редюсери в rootReducer
const rootReducer = combineReducers({
  menu: menuReducer,
  // Додаткові редюсери, якщо вони є
});

export default rootReducer;

// Експортувати тип RootState
export type RootState = ReturnType<typeof rootReducer>;
