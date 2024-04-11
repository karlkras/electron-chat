import {combineReducers, configureStore} from "@reduxjs/toolkit";
import chatReducer from "../reducers/chats";
import authReducer from "../reducers/auth";

const reducers = combineReducers({
  chats: chatReducer,
  auth: authReducer
})
const initStore = middleware1 => {
  return configureStore({
    reducer: reducers
  },);
}

export default initStore;