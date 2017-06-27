import actionTypes from './actionTypes';

const initialState = {
  user: {},
  members: [],
  messages: []
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user
      };
    case actionTypes.ADD_MEMBER_TO_CHAT:
      return {
        ...state,
        members: [...state.members, action.user]
      };
    case actionTypes.ADD_MESSAGE_TO_CHAT:
      return {
        ...state,
        messages: [...state.messages, action.message]
      };
    default:
      return state;
  }
}
