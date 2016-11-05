import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

import Messenger from '../imports/ui/components/Messenger'

Meteor.startup(() => {
  render(<Messenger />, document.getElementById('app'))
})
