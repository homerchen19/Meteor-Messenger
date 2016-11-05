import { createContainer } from 'meteor/react-meteor-data';
import Messenger from '../components/Messenger';

// minimongo
import { Messages } from '../../api/messages/messages';

export default createContainer(() => {
  return {
    messages: Messages.find().fetch()
  }
}, Messenger);
