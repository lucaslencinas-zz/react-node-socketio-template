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
                <div className={styles.member} key={member.id}>{member.name}</div>
              ))}
            </div>
          </div>
          <div className={styles.panel}>
            <div className={styles.messages}>
              {messages.map((msg) => (
                <div className={`${styles.messageContainer} ${msg.user.id === user.id ? styles.myMessage : styles.othersMessage}`} key={msg.id}>
                  <div className={styles.message}>
                    <div className={styles.messageSender}>
                      {msg.user.name}
                    </div>
                    <div className={styles.messageText}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.form}>
              <div className={styles.inputContainer}>
                <input
                  placeholder={`Write your message here, ${user.name}`}
                  className={styles.inputMessage}
                  value={message}
                  onChange={this.handleMessageChange}
                  onKeyPress={this.handleKeyPress}
                  autoFocus
                />
              </div>
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
