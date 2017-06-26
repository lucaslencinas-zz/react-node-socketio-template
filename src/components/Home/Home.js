import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: '' };
    this.handleEnterToChat = this.handleEnterToChat.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  handleEnterToChat() {
    this.props.onEnterToChat({
      user: { username: this.state.username }
    });
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    const { username } = this.state;
    const { homeTitle } = this.props;
    return (
      <div className={styles.home}>
        <div className={styles.title}>
          <h3>{homeTitle}</h3>
        </div>
        <div className={styles.form}>
          <input
            placeholder="Username"
            className={styles.inputName}
            value={username}
            onChange={this.handleUsernameChange}
          />
          <button
            type="button"
            className={styles.button}
            onClick={this.handleEnterToChat}
          >
            Enter
          </button>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  homeTitle: PropTypes.string,
  onEnterToChat: PropTypes.func
};

export default Home;
