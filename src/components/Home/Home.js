import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: '' };
    this.handleEnterToChat = this.handleEnterToChat.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleEnterToChat() {
    this.props.onEnterToChat({
      user: { name: this.state.name }
    });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleEnterToChat();
    }
  }

  render() {
    const { name } = this.state;
    const { homeTitle } = this.props;
    return (
      <div className={styles.home}>
        <div className={styles.title}>
          <h3>{homeTitle}</h3>
        </div>
        <div className={styles.form}>
          <input
            placeholder="Name"
            className={styles.inputName}
            value={name}
            onChange={this.handleNameChange}
            onKeyPress={this.handleKeyPress}
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
