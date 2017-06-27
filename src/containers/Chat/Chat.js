import { connect } from 'react-redux';
import { Chat } from '~/components';
import async from '~/containers/async';
import {
  actions,
  selectors
} from '~/domains';

const chatState = (state) => ({
  user: selectors.user(state),
  members: selectors.members(state),
  messages: selectors.messages(state)
});

const chatAction = (dispatch) => ({
  onSendMessage: (payload) => dispatch(actions.sendMessage(payload))
});

const resolve = ({ dispatch, getState }) => {
  const state = getState();
  const user = selectors.user(state);
  if (!user || !user.name) {
    return Promise.resolve(dispatch(actions.redirectHome()));
  }
  return Promise.resolve();
};

export default async(resolve)(connect(chatState, chatAction)(Chat));
