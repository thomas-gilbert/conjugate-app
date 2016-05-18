require('styles/foundation.min.css');
require('styles/App.css');

import { combineReducers } from 'redux'
import controlpanel from './controlpanel'
import weeks from './weeks'

const conjugateApp = combineReducers({
  controlpanel,
  weeks
})

export default conjugateApp