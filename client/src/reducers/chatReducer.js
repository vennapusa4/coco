import { getDate } from "../utilities/getDate";
const date=getDate();

const initialState = {
    data:[{message: "Hi, I love to help you with goods delivery. How can we start?",from:true,date:date,options:[
     "What can you do?","Schedule a Delivery","Track an Order", "Have a Question", "About Movers and Packers", "Contact Us "

    ],cardDetails:{}},] 
}
export const postMessageR= function(state = initialState, action) {
  switch (action.type) {
    case "postMessage":
      return   {...state,data:[...state.data,action.payload] }||false;
      case "fetchUser":
        {
          var copy={...state}
          if(action.payload)
          copy.data[0].message="Hi, "+action.payload.name.givenName+ " I love to help you with goods delivery. How can we start?"
        }
      return  {...copy }||false;
    default:
      return state;
  }
}
export const setLoadingR= function(state = false, action) {
  if (action.type=="loading") {
    return action.payload;
  }
  else{
    return state
  }
     
}
export const setuserMessageR= function(state = "", action) {
  if (action.type=="setuserMessage") {
    return action.payload;
  }
  else{
    return state
  }
     
}

