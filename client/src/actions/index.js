import store from "../index";
import axios from 'axios';
export const postMessage =  (data,date)=>async(dispatch)=>  {
  var data1={message: data,from:false,date:date,options:[]};
  await dispatch({ type: "loading", payload: true });
  await dispatch({ type: "postMessage", payload: data1 });
  await dispatch(getMessage(data))
  
};
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: "fetchUser", payload: res.data });
};
export const setuserMessage =  (data)=>{
  return ({ type: "setuserMessage", payload: data });
}
export const getMessage = (datat)=>async (dispatch) => {
  let today = new Date();
  let date = today.getDate() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getFullYear();
  const res =await  axios.post('/api/postmsg', {data:datat});
  const {data}=res;
  dispatch({ type: "postMessage", payload: {message: data.text,from:true,date:date,options:data.options} });
  dispatch({ type: "loading", payload: false });
};


