import { connect } from 'react-redux';
import { Home } from '~/components';
import { actions } from '~/domains';

const homeState = () => ({
  homeTitle: 'Type your name and enter the chat'
});

const homeAction = (dispatch) => ({
  onEnter: (payload) => dispatch(actions.enter(payload))
});

export default connect(homeState, homeAction)(Home);
