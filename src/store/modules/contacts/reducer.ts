import { Reducer } from 'redux';
import producer from 'immer';

import { ContactsState } from './types';

const INITIAL_STATE: ContactsState = {
  channel: 1,
  type: 'whatsapp',
};

const contacts: Reducer<ContactsState> = (state = INITIAL_STATE, action) => {
  return producer(state, draft => {
    switch (action.type) {
      case '@customers/CHOOSE_CHANNEL': {
        draft.channel = action.payload.id;
        break;
      }
    }
  });
};

export default contacts;
