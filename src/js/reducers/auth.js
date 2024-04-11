import {ACTION_TYPE} from "../actions/actionTypes";

const DEFAULT_STATE = {
  user: null,
  isChecking: false
}

const authReducer = (state = DEFAULT_STATE, action) => {
  if(action) {
    switch(action.type) {
      case ACTION_TYPE.AUTH_ON_INIT:
        return { user: null, isChecking: true };
      case ACTION_TYPE.AUTH_ON_SUCCESS:
        return { user: action.user, isChecking: false };
      case ACTION_TYPE.AUTH_ON_ERROR:
        return { user: null, isChecking: false }
      default:
        return state;
    }
  }
}

export default authReducer;