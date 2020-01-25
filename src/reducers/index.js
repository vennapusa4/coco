import { combineReducers } from 'redux';
import {postMessageR,setLoadingR} from "./chatReducer";
export default combineReducers({
  messages:postMessageR,
  loading:setLoadingR
  });
  