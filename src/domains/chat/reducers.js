import actionTypes from './actionTypes';

const initialState = {
  username: 'defaultusername',
  members: [],
  messages: []
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_USER_NAME:
      return {
        ...state,
        username: action.username
      };
    default:
      return state;
  }
}
