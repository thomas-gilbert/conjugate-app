require('styles/foundation.min.css');
require('styles/App.css');

import { combineReducers } from 'redux'
import controlpanel from './controlpanel'
import weeks from './weeks'
import exercises from './exercises'

const conjugateApp = combineReducers({
  controlpanel,
  weeks,
  exercises
})

export default conjugateApp