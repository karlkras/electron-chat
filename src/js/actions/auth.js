import * as api from '../api/auth';
import {ACTION_TYPE} from "./actionTypes";

export const register = formData => dispatch => {
  dispatch({ type: ACTION_TYPE.AUTH_REGISTER_INIT});
  return api
    .register(formData)
    .then(_ => dispatch({type: ACTION_TYPE.AUTH_REGISTER_SUCCESS}))
}

export const logout = () => dispatch =>
  api
    .logout()
    .then(_, dispatch({type: ACTION_TYPE.AUTH_LOGOUT_SUCCESS}))

export const login = formData => dispatch => {
  debugger
  dispatch({ type: ACTION_TYPE.AUTH_LOGIN_INIT});
  return api
    .login(formData)
    .then(_, dispatch({type: ACTION_TYPE.AUTH_LOGIN_SUCCESS}))
}

export const listenToAuthChanges = () => dispatch => {
  dispatch({ type: ACTION_TYPE.AUTH_ON_INIT});
  api.onAuthStateChanges(authUser => {
    if(authUser) {
      const user = { email: authUser.email, uid: authUser.uid }
      dispatch({ type: ACTION_TYPE.AUTH_ON_SUCCESS, user});
      console.log('we are authenticated');
    } else {
      dispatch({ type: ACTION_TYPE.AUTH_ON_ERROR, user: null});
      console.log('we are NOT authenticated');
    }
  })
}