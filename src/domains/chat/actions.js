import { push } from 'react-router-redux';
import uuid from 'uuid';
import actionTypes from './actionTypes';

function setUser(user) {
  return {
    type: actionTypes.SET_USER,
    user
  };
}

function addMemberToChat(user) {
  return {
    type: actionTypes.ADD_MEMBER_TO_CHAT,
    user
  };
}

function addMessageToChat(message) {
  return {
    type: actionTypes.ADD_MESSAGE_TO_CHAT,
    message
  };
}

export function enterToChat({ user }) {
  return (dispatch) => {
    const currentUser = { ...user, id: uuid.v4() };
    return Promise.all([
      dispatch(setUser(currentUser)),
      dispatch(addMemberToChat(currentUser)),
      dispatch(push('/chat/'))
    ]);
  };
}

export function sendMessage({ user, text }) {
  return (dispatch) => Promise.resolve(dispatch(addMessageToChat({ user, text, id: uuid.v4() })));
}
