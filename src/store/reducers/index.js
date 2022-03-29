import { combineReducers } from "redux";
import { historyReducer } from "./historyReducer";

export const reducers = combineReducers({
  history: historyReducer,
});
