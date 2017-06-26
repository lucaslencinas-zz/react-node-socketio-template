import { push } from 'react-router-redux';
import actionTypes from './actionTypes';

function setUserName({ name }) {
  return {
    type: actionTypes.SET_USER_NAME,
    name
  };
}

export function enterToChat({ user }) {
  return (dispatch) => (
    Promise.all([
      // dispatch(setUserName(user)),
      dispatch(push('/chat/'))
    ])
  );
}
