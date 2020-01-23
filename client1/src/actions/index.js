import store from "../index"
const apiai = require('apiai');
const app = apiai("af5a5dee9a84473bb83898476d40e8ef");

export const postMessage =  (data,date)=>  {
  var data1={message: data,from:false,date:date};
  if(store)
  store.dispatch(getMessage(data))
  return({ type: "postMessage", payload: data1 });
};
export const getMessage = (data)=>async (dispatch) => {
  let today = new Date();
  let date = today.getDate() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getFullYear();
var request = app.textRequest(data, {    
  sessionId: '123456'
});
request.on('response', (response)=> {
  dispatch({ type: "postMessage", payload: {message: response.result.fulfillment.speech,from:true,date:date} });
    console.log(response.result.fulfillment.speech);
});
request.on('error', function(error) {
    console.log(error);
});
request.end();
 
};


