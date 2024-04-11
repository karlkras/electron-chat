import * as api from '../api/chat';
import { ACTION_TYPE } from "./actionTypes";

export const fetchChats = () => dispatch =>
  api
    .fetchChats()
    .then(chats => dispatch({
      type: ACTION_TYPE.CHATS_FETCH_SUCCESS,
      chats
    }))
