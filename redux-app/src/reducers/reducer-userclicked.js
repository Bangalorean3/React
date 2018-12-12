//import { bindActionCreators } from "redux";

export default function(state=null,action){
    switch(action.type){
        case "USERCLICKED":  return action.payLoad
        // console.log("Action is received in reducer");
        // console.log(action.payload);
        default: break;
    }

    return state;
}