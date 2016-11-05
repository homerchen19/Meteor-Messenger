import React, { Component } from 'react'

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

  getMessages () {
    return [
      { _id: 1, username: 'Max', text: 'Hello. How are you?' },
      { _id: 2, username: 'Jack', text: 'I\'m find. Thank you and you' },
      { _id: 3, username: 'Max', text: 'Great!' }
    ];
  }

  renderMessages () {
    return this.getMessages().map((message) => (
      <Message key={message._id} message={message} />
    ));
  }
}

export default Messenger
