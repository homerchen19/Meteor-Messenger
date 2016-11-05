import React, { Component, PropTypes } from 'react';
import styles from './Message.style';

class Message extends Component {
  render () {
    return (
      <div>
        <div style={styles.username}>
          {this.props.message.username}
        </div>
        <div style={styles.text}>
          {this.props.message.text}
        </div>
      </div>
    )
  }
}

Message.propTypes = {
  message: PropTypes.object.isRequired
}

export default Message
