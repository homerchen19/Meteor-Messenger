import React, { Component, PropTypes } from 'react'

import Message from './Message'
import MessageInput from './MessageInput'
import styles from './Messenger.style';

class Messenger extends Component {
  render () {
    return (
      <div style={styles.root}>
        <div style={styles.messenger}>
          <div style={styles.header}>
            <div style={styles.text}>
              Meteor-Messenger
            </div>
            <div style={styles.account}>
            </div>
          </div>
          <div style={styles.messages}>
            {this.renderMessages()}
          </div>
          <MessageInput />
        </div>
      </div>
    )
  }

  renderMessages () {
    return this.props.messages.map(message => (
      <Message key={message._id} message={message} />
    ));
  }
}

Messenger.propTypes = {
  messages: PropTypes.array
};

export default Messenger
