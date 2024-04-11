import {ACTION_TYPE} from "../actions/actionTypes";

const DEFAULT_STATE = {
  items: []
}

const chatReducer = (state = DEFAULT_STATE, action) => {
  if(action) {
    switch(action.type) {
      case ACTION_TYPE.CHATS_FETCH_SUCCESS:
        return { items: action.chats }
      default:
        return state;
    }
  }
}

export default chatReducer;