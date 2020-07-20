import { Reducer } from 'redux';
import producer from 'immer';

import { CustomersState } from './types';

const INITIAL_STATE: CustomersState = {
  customers: [],
  customerSelected: 1,
};

const customers: Reducer<CustomersState> = (state = INITIAL_STATE, action) => {
  return producer(state, draft => {
    switch (action.type) {
      case '@customers/CHOOSE_CUSTOMER': {
        draft.customerSelected = action.payload.id;
        break;
      }
    }
  });
};

export default customers;
