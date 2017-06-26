import { connect } from 'react-redux';
import { Chat } from '~/components';
import {
  actions,
  selectors
} from '~/domains';

const chatState = (state) => ({
  username: selectors.username(state),
  members: selectors.members(state),
  messsages: selectors.messages(state)
});

const chatAction = (dispatch) => ({
  onSendtMessage: (payload) => dispatch(actions.sendtMessage(payload))
});

export default connect(chatState, chatAction)(Chat);
