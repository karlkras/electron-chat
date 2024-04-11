import * as api from '../api/auth';
import {ACTION_TYPE} from "./actionTypes";

export const register = formData => dispatch =>
  api
    .register(formData)
    .then(_ => dispatch({type: ACTION_TYPE.AUTH_REGISTER_SUCCESS}))

export const listenToAuthChanges = () => dispatch => {
  debugger
  dispatch({ type: ACTION_TYPE.AUTH_ON_INIT})
  api.onAuthStateChanges(authUser =>
    authUser ? dispatch({type: ACTION_TYPE.AUTH_ON_SUCCESS, user: authUser}) :
      dispatch({type: ACTION_TYPE.AUTH_ON_ERROR})
  )
}