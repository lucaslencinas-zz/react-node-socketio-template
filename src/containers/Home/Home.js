import { connect } from 'react-redux';
import { Home } from '~/components';
import { actions } from '~/domains';

const homeState = () => ({
  homeTitle: 'Type your name and enter the chat'
});

const homeAction = (dispatch) => ({
  onEnterToChat: (payload) => dispatch(actions.enterToChat(payload))
});

export default connect(homeState, homeAction)(Home);
