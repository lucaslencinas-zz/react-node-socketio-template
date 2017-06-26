import React from 'react';
import PropTypes from 'prop-types';
import styles from './Chat.css';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.handleSend = this.handleSend.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.state = { message: '' };
  }

  handleSend() {
    const { username, onSendMessage } = this.props;

    onSendMessage({ username, message: this.state.message });
    this.setState({ message: '' });
  }

  handleMessageChange(e) {
    this.setState({ message: e.target.value });
  }

  render() {
    const { username, messages, members } = this.props;
    const { message } = this.state;
    return (
      <div className={styles.chat}>
        <h3>Welcome to the Chat</h3>
        <div className={styles.content}>
          <div className={styles.members}>
            <div className={styles.list}>
              lista de miembros: {members}
            </div>
          </div>
          <div className={styles.panel}>
            <div className={styles.messages}>
              lista de mensajes: {messages}
            </div>
            <div className={styles.form}>
              <input
                placeholder={`Write your message here, ${username}`}
                className={styles.inputMessage}
                value={message}
                onChange={this.handleMessageChange}
              />
              <button type="button" onClick={this.handleSend}>Send</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  username: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.object),
  members: PropTypes.arrayOf(PropTypes.object),
  onSendMessage: PropTypes.func
};

export default Chat;
