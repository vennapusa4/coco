import { combineReducers } from 'redux';
import chatReducer from "./chatReducer";
export default combineReducers({
  messages:chatReducer
  });
  