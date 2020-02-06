import { combineReducers } from 'redux';
import {postMessageR,setLoadingR,setuserMessageR} from "./chatReducer";
import authReducer from './authReducer';
export default combineReducers({
  messages:postMessageR,
  loading:setLoadingR,
userMsg:setuserMessageR,
user:authReducer
  });
  