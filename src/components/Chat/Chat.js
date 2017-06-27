import React from 'react';
import PropTypes from 'prop-types';
import styles from './Chat.css';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.handleSend = this.handleSend.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = { message: '' };
  }

  handleSend() {
    const { user, onSendMessage } = this.props;

    onSendMessage({ user, text: this.state.message });
    this.setState({ message: '' });
  }

  handleMessageChange(e) {
    this.setState({ message: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSend();
    }
  }

  render() {
    const { user, messages, members } = this.props;
    const { message } = this.state;
    return (
      <div className={styles.chat}>
        <h3>Welcome to the Chat</h3>
        <div className={styles.content}>
          <div className={styles.members}>
            <div className={styles.list}>
              {members.map((member) => (
                <div key={member.id}>{member.name}</div>
              ))}
            </div>
          </div>
          <div className={styles.panel}>
            <div className={styles.messages}>
              {messages.map((msg) => (
                <div key={msg.id}>{msg.user.name} says: {msg.text}</div>
              ))}
            </div>
            <div className={styles.form}>
              <input
                placeholder={`Write your message here, ${user.name}`}
                className={styles.inputMessage}
                value={message}
                onChange={this.handleMessageChange}
                onKeyPress={this.handleKeyPress}
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
  user: PropTypes.object,
  messages: PropTypes.arrayOf(PropTypes.object),
  members: PropTypes.arrayOf(PropTypes.object),
  onSendMessage: PropTypes.func
};

export default Chat;
