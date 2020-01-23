const initialState = {
    data:[{message: "Hello there! How can I help you?",from:true,date:"13-10-16"}
]}
export default function(state = initialState, action) {
  switch (action.type) {
    case "postMessage":
      return   {...state,data:[...state.data,action.payload] }||false
    default:
      return state;
  }
}

