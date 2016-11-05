import { Meteor } from 'meteor/meteor';
import { Messages } from './messages';

Meteor.methods({
  'messages.insert': text => {
    const username = 'Anonymous';

    Messages.insert({
      username,
      text,
      createAt: new Date()
    });
  }
});
