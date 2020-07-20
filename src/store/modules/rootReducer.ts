import { combineReducers } from 'redux';

import customers from './customers/reducer';
import contacts from './contacts/reducer';

export default combineReducers({
  customers,
  contacts,
});
