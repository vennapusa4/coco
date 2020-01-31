import { combineReducers } from 'redux';
import {postMessageR,setLoadingR,setuserMessageR} from "./chatReducer";
export default combineReducers({
  messages:postMessageR,
  loading:setLoadingR,
userMsg:setuserMessageR
  });
  