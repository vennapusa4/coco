import { getDate } from "../utilities/getDate";
const date=getDate();

const initialState = {
    data:[{message: "Hi. CoCo here",from:true,date:date,options:[
     "What can you do?","What's on my screen","Play music"
    ]},] 
}
export const postMessageR= function(state = initialState, action) {
  switch (action.type) {
    case "postMessage":
      return   {...state,data:[...state.data,action.payload] }||false
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

