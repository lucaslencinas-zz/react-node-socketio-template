import { connect } from 'react-redux';
import { Chat } from '~/components';
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

export default connect(chatState, chatAction)(Chat);
