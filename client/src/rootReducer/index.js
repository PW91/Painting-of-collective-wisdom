import { combineReducers } from "redux";
import { default as itemsReducer } from "../modules/items";

export default combineReducers({
  items: itemsReducer
});
