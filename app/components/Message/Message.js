import React, { PropTypes } from 'react';
import { Avatar, MessageMenu } from '../';
import css from './Message.scss';

const MessageInput = ({ message, finishEdit, checkEnter }) =>
  <input
    type="text"
    name="message"
    className={css.input}
    defaultValue={message}
    onBlur={finishEdit}
    onKeyPress={checkEnter}
  />;

const MessageText = ({ message }) =>
  <p>
    {message}
  </p>;

class Message extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    userImageURL: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={'message'}>
        <MessageMenu />
        <div className={css.messageText}>
          <MessageText message={this.props.message} />
        </div>
        <div className={css.messageAvatar}>
          <Avatar
            userImageURL={this.props.userImageURL}
            userName={this.props.userName}
            userEmail={this.props.userEmail}
            votes={0}
          />
        </div>
      </section>
    );
  }
}

export default Message;
