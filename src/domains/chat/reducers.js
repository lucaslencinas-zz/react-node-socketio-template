import actionTypes from './actionTypes';

const members = [{ name: 'alguien', id: 'unuuid' }, { name: 'otro', id: 'otrounuuid' }, { name: 'utlimo', id: 'ultimounuuid' }];
const messages = [
  { text: 'algo asd', id: 'unuuid', user: members[0] },
  { text: 'algo asd123', id: 'otrounuuid2', user: members[1] },
  { text: ' askdja liuwqioeu ', id: 'ul23timounuuid', user: members[2] },
  { text: 'algo222 asd123', id: 'ovctrounuuid2', user: members[1] },
  { text: 'algxxxo asd123', id: 'otrofgfgunuuid2', user: members[0] }
];

const initialState = {
  user: {},
  members,
  messages
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
